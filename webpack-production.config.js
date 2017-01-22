const webpack = require("webpack");
module.exports = {
  entry: "./src/js/entry.js",
  output: {
    path: __dirname,
    filename: "./dist/app.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/,  loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
}

