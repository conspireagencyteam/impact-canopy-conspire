const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Helper function to get files from directory (root level only)
const getFilesFromDir = (dir, extension) => {
  const dirPath = path.resolve(__dirname, dir);
  if (!fs.existsSync(dirPath)) return {};

  return fs.readdirSync(dirPath)
    .filter(file => {
      const filePath = path.join(dirPath, file);
      return fs.statSync(filePath).isFile() && file.endsWith(extension);
    })
    .reduce((entries, file) => {
      const name = path.basename(file, extension);
      // Use forward slashes and ./ prefix for webpack compatibility (cross-platform)
      entries[name] = `./${dir}/${file}`.replace(/\\/g, '/');
      return entries;
    }, {});
};

// Get all JS files from src/scripts (root level only)
const scriptEntries = getFilesFromDir('src/scripts', '.js');

// Get all SCSS files from src/styles (root level only)
const styleEntries = getFilesFromDir('src/styles', '.scss');

// Combine all entries
const entries = { ...scriptEntries, ...styleEntries };

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: entries,
    output: {
      path: path.resolve(__dirname, 'assets'),
      filename: '[name].js',
      clean: false, // Don't clean assets folder (Shopify theme files may exist there)
    },
    module: {
      rules: [
        // JavaScript/Babel loader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    browsers: ['last 2 versions', 'safari >= 12', 'ios >= 12']
                  },
                  modules: false,
                }]
              ],
            },
          },
        },
        // SCSS/CSS loader
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false, // Don't resolve URLs in CSS (Shopify handles asset URLs differently)
                sourceMap: false, // Disable CSS source maps
              },
            },
            {
              loader: 'sass-loader',
              options: {
                api: 'modern', // Use modern Sass API
                sourceMap: false, // Disable Sass source maps
                sassOptions: {
                  outputStyle: isProduction ? 'compressed' : 'expanded',
                  quietDeps: true, // Suppress dependency warnings
                  silenceDeprecations: ['import'], // Suppress @import deprecation warnings
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/icons/**/*.svg',
            to: '[name][ext]',
            transform(content, absoluteFrom) {
              // Minify SVG using basic optimization
              const svgString = content.toString();
              // Remove comments
              let optimized = svgString.replace(/<!--[\s\S]*?-->/g, '');
              // Remove unnecessary whitespace
              optimized = optimized.replace(/>\s+</g, '><');
              // Remove metadata tags
              optimized = optimized.replace(/<metadata[\s\S]*?<\/metadata>/gi, '');
              optimized = optimized.replace(/<title[\s\S]*?<\/title>/gi, '');
              optimized = optimized.replace(/<desc[\s\S]*?<\/desc>/gi, '');
              return Buffer.from(optimized);
            },
          },
        ],
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false, // Disable LICENSE.txt file generation
          terserOptions: {
            format: {
              comments: false, // Remove all comments from bundle
            },
          },
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                calc: false, // Disable calc optimization to avoid parse errors with complex CSS
              },
            ],
          },
        }),
      ],
      minimize: isProduction,
    },
    resolve: {
      extensions: ['.js', '.scss', '.css'],
      alias: {
        '@theme': path.resolve(__dirname, 'src/scripts'),
        '@scripts': path.resolve(__dirname, 'src/scripts'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@icons': path.resolve(__dirname, 'src/icons'),
      },
    },
    devtool: false, // Disable source maps completely
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
    performance: {
      hints: isProduction ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
