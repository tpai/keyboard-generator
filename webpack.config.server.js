var webpack = require("webpack");
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: "node",
    externals: [nodeExternals()],
    node: {
      __dirname: true
    },
    entry: ["server", "server.socket"],
    resolve: {
        root: [ path.resolve("./src") ],
        extensions: ["", ".js"]
    },
    output: {
        path: "./",
        filename: "server.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/, loader: "json-loader"
            },
            {
                test: /\.js?/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["babel"]
            }
        ]
    }
}
