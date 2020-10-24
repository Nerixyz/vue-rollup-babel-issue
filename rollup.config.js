import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.ts', '.vue'];

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'iife',
    },
    plugins: [
        nodeResolve({ extensions }),
        vue({ preprocessStyles: false }),
        babel({
            babelrc: false,
            extensions,
            babelHelpers: 'bundled',
            presets: [['@babel/env', {
                targets: {
                    chrome: "61",
                },
            }]]
        }),
        css({ output: 'dist/bundle.css' })
    ]
}
