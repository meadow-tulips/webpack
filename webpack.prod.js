const path = require('path');
const webpackcommon = require('./webpack.common');
const { merge } = require('webpack-merge');


module.exports = merge(webpackcommon, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'imgs/img-[contenthash].[ext]',
        clean: true
    },
});