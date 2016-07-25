var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './app/components/index.js',

  output: {
    path: './public',
    filename: 'js/bundle.js',
  },

  devServer: {
    contentBase: './public',
    inline: true,
    port: 8080
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',

      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader',
        'css-loader!less-loader')
    }]
  },

  plugins: [
    new ExtractTextPlugin('css/styles.css')
  ]
};

module.exports = config;
