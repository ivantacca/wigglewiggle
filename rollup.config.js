import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy'

export default {
  input: './src/index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    // copy({
    //   targets: [
    //     { src: './test/image', dest: 'build' },
    //   ]
    // })
  ],
  output: [
    { file: 'build/wigglwiggle.umd.js', format: 'umd', name: 'wiggle' },
  ],
}