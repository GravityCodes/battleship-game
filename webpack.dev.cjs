const { merge } = require("webpack-merge");
const common = require("./webpack.common.cjs");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});