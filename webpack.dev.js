import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import path from "path";

// For ESM, the equivalent of __dirname is:
const __dirname = new URL(".", import.meta.url).pathname;

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map", // Better source maps for debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve files from 'dist'
    },
    port: 8080,
    open: true,
    compress: true,
    hot: true,
  },
});
