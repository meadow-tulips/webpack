var path = require('path');
var webpackcommon = require('./webpack.common');
const { merge } = require('webpack-merge');


module.exports = merge(webpackcommon, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
});