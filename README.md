** WARNING: Ultra hacky preview **

# Splittable

Splittable is a next-generation module bundler for JavaScript with support for

- super simple **code splitting**.
- **ES6** modules.
- **CommonJS** modules (with some caveats).
- **extremely efficient** packing of modules.
- **dead code elimination** (also sometimes called **tree shaking**).
- **smaller code** for real world projects than all other known module bundlers.

## Usage

```js
splittable({
  // Create bundles from 2 entry modules `./lib/a` and `./lib/b`.
  modules: ['./lib/a', './lib/b'],
  writeTo: 'out/',
});
```

The above will write 3 files (plus sourcemaps) to the directory `out`.

1. A bundle of `./lib/a` and its dependencies.
2. A bundle of `./lib/b` and its dependencies.
3. A bundle called `_base.js` that contains the shared dependencies of the entry modules.

## Isn't this like

- **Rollup**: Yes, but it supports code splitting, CommonJS modules, and significantly more aggressive tree shaking. File sizes should typically be much smaller.
- **Webpack**: Webpack has way bigger scope, but could possibly use Splittable as a plugin. In general, Webpack will generate significantly less efficient and much bigger code.
- **Browserify**: See Webpack.

## How does it work?

Splittable is a wrapper around both browserify, babel and Closure Compiler. It uses the former 2 to resolve modules and their dependencies, and then uses Closure Compiler for efficient compilation of code.

Splittable takes a list of entry modules as its input and then creates bundles for each of them, as well as an additional bundle with the share dependencies.

