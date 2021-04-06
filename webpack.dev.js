var path = require('path');
var webpackcommon = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');


module.exports = merge(webpackcommon, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: false
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', // Injects css to DOM
                 'css-loader', // converts css to common js
                 'sass-loader' // converts sass to css
                ]
            },
        ]
    }
});