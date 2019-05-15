const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { // Dev server command line 
        open: true,
        port: 3000,
        hot: true
    },
    module: { // This node is used to configure all third-party modules loader
        rules:[
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // Configure third-party loader
        ]
    }
}