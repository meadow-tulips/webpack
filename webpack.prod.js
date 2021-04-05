const path = require('path');
const webpackcommon = require('./webpack.common');
const { merge } = require('webpack-merge');


module.exports = merge(webpackcommon, {
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
});