const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
      filename: "[name].js",
      path: path.join(__dirname, "/dist"),
      publicPath: '/'
      // sourceMapFilename: "bundle.js.map"
  },
// devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
         test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf)$/,
         use: 'url-loader?limit=100000'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      }
    ]
  },

  resolve: {
   extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },


  plugins: [
    new HtmlWebpackPlugin({
       template: "/src/index.html"
    }),
    // new SourceMapDevToolPlugin({
    //   filename: "bundle.map"
    // })
  ]
}
