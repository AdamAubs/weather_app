import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

// For ESM, the equivalent of __dirname is:
const __dirname = new URL('.', import.meta.url).pathname;

export default {
  entry: './src/index.js', // Shared entry file
  output: {
    filename: '[name].bundle.js', // Chunk names
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the 'dist' folder before builds
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Shared HTML template
    }),
    new ESLintPlugin({
      extensions: ['js'], // Only lint JavaScript files
      files: 'src/**/*.js', // Specify the folder/files to lint
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // Shared CSS rule
        use: ['style-loader', 'css-loader'],
      },
      // Rule to handle image files
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // Handles the files as a separate resource
      },
      // Rule to handle video files
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: 'asset/resource', // Handles the video files as separate resources
      },
    ],
  },
};
