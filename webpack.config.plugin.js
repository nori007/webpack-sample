const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },

    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlwebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            excludeChunks: ['index']
        })
    ]
};