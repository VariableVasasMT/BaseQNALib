import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

let packageJson = require('./package.json');

let {'jsnext:main': jsnext, main, name, "browser:main": browserMain} = packageJson;

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
  },{
    format: 'iife',
    file: browserMain,
    name
  }],  
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      include: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
