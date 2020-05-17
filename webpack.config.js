const Vue = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./index.js",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx", ".vue"],
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css|scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [new Vue()],
};
