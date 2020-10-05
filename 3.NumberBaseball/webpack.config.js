/*
module.exports = {
    entry: {
        app: "./main.js",
    },
    module: {
        rules: [{}],
    },
    plugins: [],
    output: {
        filename: "[name].js",
        path: "./dist",
    },
};
*/

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".vue"],
    },
    entry: {
        app: path.join(__dirname, "main.js"),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist"),
    },
};
