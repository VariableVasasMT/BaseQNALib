import babel from 'rollup-plugin-babel';
let packageJson = require('./package.json');
let {'jsnext:main': jsnext, main, name} = packageJson;

export default {
  input: 'src/index.js',
  output: [{
    format: 'umd',
    file: main,
    name
  }, {
    format: 'es',
    file: jsnext,
    name
  }],
  plugins: [
    babel()
  ]
};
