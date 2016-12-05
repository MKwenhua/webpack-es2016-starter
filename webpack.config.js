const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, "public"),
    entry: "./es6/entry.js",
    output: {
        path: __dirname + "/public/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: path.join(__dirname, './'),
            loader: "babel-loader" ,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]

    }
};