let webpack = require('webpack');
let path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.noDeprecation = true; //< Supress webpack deprecation message

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'tether',                                 //< required for boostrap v4.x.x
    'bootstrap-loader',                       //< required to include bootstrap
    './src/index.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery',
      /* BOOTSTRAP-LOADER MODULES
      identifier:module pairs used for bootstrap/bootstrap-loader
      */
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
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
      './src/components',
      './src/api'
    ],
    alias: {
      applicationStyles: 'src/styles/app.scss'
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
          includePaths: []
        }
      }
    ]
  },
  devtool: undefined
}