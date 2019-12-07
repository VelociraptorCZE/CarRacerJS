const webpack = require("webpack");
const path = require("path");
const process = require("process");
const Uglify = require("uglifyjs-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = {
    watch: true,
    entry: [
        "./src/js/App.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude:  /node_modules\/(?!(particleeffect|grumpydi)\/).*/,
                loader: "babel-loader",
                query: {
                    cacheDirectory: true,
                    presets: [
                        ["@babel/preset-env"]
                    ],
                },
            }
        ]},
    optimization: {
        usedExports: true,
        minimizer: [
            new Uglify({
                uglifyOptions: {
                    compress: {
                        drop_console: false,
                    }
                }
            })
        ]
    }
};