const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "script.js"),
  output: {
    module: true,
    path:path.resolve(__dirname, "dist"),
  },
  target: 'web',
  experiments: {
    outputModule: true,
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "@sucrase/webpack-loader",
          options: { transforms: ["jsx", "imports"] },
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}