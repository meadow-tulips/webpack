var path = require('path');
var webpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    plugins:[new webpackPlugin({
        template: "./src/template.html",
    })],
    module : {
        rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(png | jpg | gif | svg)$/,
            type: 'asset/resource',

         }
      ],
    },
}