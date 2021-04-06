var path = require('path');

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module : {
        rules: [
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(png | jpg | gif | svg)$/,
            type: 'asset/resource',

         },
      ],
    },
}