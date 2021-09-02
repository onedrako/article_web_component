const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { PassThrough } = require("stream")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: { bundle: "./src/index.js",
            card:"./src/components/card.js"},

    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },

    resolve:{
        extensions: [".js"]
    },

    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader"
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css"
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, "./assets"),
                to: "assets/"
            }]
        })
    ],
}
