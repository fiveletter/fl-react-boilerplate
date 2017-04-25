let webpack = require('webpack');
let path = require('path');

process.noDeprecation = true;

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader',
        options: {
          includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
          ]
        }
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
}