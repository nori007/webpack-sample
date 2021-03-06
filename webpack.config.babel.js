const path = require('path');


module.exports = {
    entry: './src/index.js',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};