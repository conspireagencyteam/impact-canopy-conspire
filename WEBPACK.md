# Webpack Configuration for Impact Canopy Shopify Theme

This Shopify theme uses Webpack to compile source files from the `src/` directory into the `assets/` folder.

## Directory Structure

```
src/
├── icons/          → SVG icons (optimized and copied to assets/)
├── scripts/        → JavaScript files (compiled to assets/*.js)
└── styles/         → SCSS files (compiled to assets/*.css)
    └── essentials/ → Shared SCSS (excluded from compilation)
```

## Compilation Rules

- **Scripts**: All `.js` files in `src/scripts/` (root level only) → `assets/*.js`
- **Styles**: All `.scss` files in `src/styles/` (root level only) → `assets/*.css`
- **Icons**: All `.svg` files in `src/icons/` → `assets/*.svg` (minimized & optimized)
- **Subdirectories**: Files in subdirectories (like `src/styles/essentials/`) are NOT compiled directly
- **Output Naming**: Compiled files keep the same name as source files (no `.bundle` suffix)
- **SVG Optimization**: SVG files are automatically minified (whitespace removal, comment removal, metadata stripping)

## NPM Scripts

### Install Dependencies
```bash
npm install
```

### Development Mode (Watch)
Compiles in development mode with source maps and watches for changes:
```bash
npm run dev
```

### Production Build
Compiles with minification and optimizations:
```bash
npm run build
```

### Clean Build Artifacts
Removes all webpack-generated files from assets folder:
```bash
npm run clean
```

### Shopify Theme Dev
Run Shopify development server:
```bash
npm run shop
```

## Features

✅ **Babel Transpilation** - Modern JavaScript → Browser-compatible code
✅ **SCSS Compilation** - Sass → CSS with autoprefixing
✅ **SVG Optimization** - SVGO compression for icons
✅ **Code Minification** - Enabled in production mode
✅ **Hot Reloading** - Watch mode for rapid development
✅ **Modern Sass API** - No deprecation warnings
✅ **Path Aliases** - Use `@theme/*`, `@scripts/*`, `@styles/*`, `@icons/*`
✅ **Clean Output** - No .map or .LICENSE.txt files, same filenames as source

## Import Aliases

Use these aliases in your code:

```javascript
// JavaScript imports
import { Component } from '@theme/component';
import { utilities } from '@theme/utilities';
```

```scss
// SCSS imports
@import '@styles/essentials/variables';
```

## Browser Support

Targets the last 2 versions of major browsers, Safari 12+, and iOS 12+.

## Notes

- Compiled files in `assets/` are auto-generated from `src/` and should not be edited manually
- All webpack-generated files are ignored by git (see `.gitignore`)
- Compiled files keep the same name as their source files (e.g., `src/scripts/header.js` → `assets/header.js`)
- SVG files are automatically minified: comments removed, whitespace optimized, metadata/title/desc tags stripped
- CSS `calc()` optimization is disabled to preserve complex Shopify expressions
- Source maps are disabled to keep assets folder clean (no `.map` files)
- License comments are stripped from bundles (no `.LICENSE.txt` files)

---

**Built by Conspire for Level**
