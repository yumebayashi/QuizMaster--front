module.exports = {
  entry: "./src/js/entry.js",
  output: {
    path: __dirname,
    filename: "./dist/app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,  loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
}

