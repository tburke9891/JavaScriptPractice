const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './' //where the root html file can be found
  // }
  // plugins: [
  //   new CleanPlugin.CleanWebpackPlugin()
  // ]
};