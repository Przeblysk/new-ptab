/*
 * @Author: Przeblysk
 * @Date: 2021-09-14 13:58:57
 * @LastEditTime: 2021-09-18 15:59:36
 * @LastEditors: Przeblysk
 * @Description:
 * @FilePath: /new-ptab/webpack.config.js
 *
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/new-tab.js",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/manifest.json", to: "./manifest.json" }],
    }),
    new HtmlWebpackPlugin({
      title: "New Ptab",
      filename: "new-tab.html",
      template: "./template/new-tab.html",
    }),
    new HtmlWebpackPlugin({
      title: "popup",
      filename: "popup.html",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.((sa|sc)ss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.module\.((sa|sc)ss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
