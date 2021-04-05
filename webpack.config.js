var path = require('path');
var webpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins:[new webpackPlugin({
        template: "./src/template.html",
    })],
    module : {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
}