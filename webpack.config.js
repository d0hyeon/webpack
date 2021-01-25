const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].[contenthash].bundle.js"
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.json', '.css'],
    alias: {
      '@src': path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: "babel-loader"
      }, 
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
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