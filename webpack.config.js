const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for JavaScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web', // Alias to use React Native for Web
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Process JavaScript and JSX files
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    // Plugin to generate an HTML file to serve your React app
    new HtmlWebpackPlugin({
      template: './public/index.html', // Point to your HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from 'dist' directory
    },
    compress: true,  // Enable gzip compression for everything served
    port: 9000,      // Web app will run on localhost:9000
  },
};
