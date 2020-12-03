const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].[contenthash].bundle.js"
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: '/\.js?$/',
        loader: 'babel-loader'
      }, {
        test: '/\.css?$/',
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    inline: false,
    historyApiFallback: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
}