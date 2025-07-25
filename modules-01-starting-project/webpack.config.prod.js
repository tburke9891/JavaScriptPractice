const path = require("path");
// const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/app.js",
	output: {
		filename: "[contenthash].js",
		path: path.resolve(__dirname, "assets", "scripts"),
		publicPath: "assets/scripts/",
	},
	devtool: "cheap-source-map",
	// devServer: {
	//   contentBase: './' //where the root html file can be found
	// }
	// plugins: [
	//   new CleanPlugin.CleanWebpackPlugin()
	// ]
};
