const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/dashboard.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    devMiddleware: {
      index: 'dashboard.html',
      writeToDisk: true
    },
    port: 9000,
    historyApiFallback: {
      index: 'dashboard.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-runtime',
                '@babel/plugin-transform-async-to-generator'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      title: 'Dashboard',
      meta: {
        'X-UA-Compatible': {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }
      },
      minify: false
    }),
    new ModuleFederationPlugin({
      name: 'Dashboard',
      remotes: {
        HelloWorldApp: 'HelloWorldApp@http://localhost:4000/remoteEntry.js',
        KiwiApp: 'KiwiApp@http://localhost:4001/remoteEntry.js'
      }
    })
  ]
};
