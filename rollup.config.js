var buble = require('rollup-plugin-buble');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var license = require('rollup-plugin-license');

module.exports = {
    input: 'src/svg-text-animate.js',
    output: [
        {
            file: 'dist/svg-text-animate.js',
            // format: 'umd',
            format:"iife",
            name: 'SVGTextAnimate',
            sourcemap: true
        },
        {
            file: 'dist/svg-text-animate.module.js',
            format: 'es',
            sourcemap: true
        },
   ],
    plugins: [
        resolve({
            mainFields: ['module', 'main', 'jsnext', 'browser'],
        }),
        commonjs(),
        buble(),
        license({
            banner: 'https:// | (c) Frederik De Bleser and other contributors | MIT License | Uses a by A' +
            ' and b by B'
        })
    ],
    watch: {
        include: 'src/**'
    }
};