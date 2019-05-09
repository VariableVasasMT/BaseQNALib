# js-library-seed

### Introduction

This repository is a basic scaffold for writing isomorphic JavaScript libraries.
The two main features provided by the setup are 1) a <u>test-driven</u> and
<u>command-line</u> environment to track real-time results of development and 2) 
a build script to assemble a library for distribution.  The test and test coverage 
commands are also available.

### Usage

The following four scripts are implemented in `package.json`:

1. `npm run dev` - watches `src` and `test` directories for changes and runs
`*.test.js` files that are in `test` directory.
2. `npm run build` - assembles a library source code into a UMD distributable.
3. `npm run test` - runs test files one time.
4. `npm run test:coverage` - runs tests and calculates code coverage.

### Tools Used

* [Babel](https://babeljs.io/) - ESNext transpiler
* [Rollup](https://rollupjs.org/guide/en) - source code bundler
* [Mocha](https://mochajs.org/) - test declaration framework
* [Chai](https://www.chaijs.com/) - test assertions library
* [Istanbul](https://istanbul.js.org/) - code coverage tool
