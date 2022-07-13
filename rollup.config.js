import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel(),
    uglify({
      toplevel: true,
      output: {
        comments: false
      },
      compress: {
        pure_getters: true,
        unsafe: false,
      }
    })
  ]
};
