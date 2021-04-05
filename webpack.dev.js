var path = require('path');
var webpackcommon = require('./webpack.common');
const { merge } = require('webpack-merge');


module.exports = merge(webpackcommon, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
});