const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
  entry:  path.join(__dirname, "src/index.jsx"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: './favicon.ico',
      template: "./index.html",
      filename: "./index.html",
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  }
};
