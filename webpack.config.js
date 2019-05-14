const webpack = require('webpack');


const config = {
  
  entry: './src/bundle.js',
  
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  mode: 'development'
}

module.exports = config;