const path = require("path");
module.exports = {
  mode: "development",
  cache: false,
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./public"),
    },
    compress: true,
    port: 9000,
  },
};
