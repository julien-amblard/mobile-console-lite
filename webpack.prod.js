const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "demo/index.html"),
	filename: "./index.html"
});
module.exports = {
	entry: path.join(__dirname, "demo/prod.js"),
	output : {
		path: path.resolve(__dirname,'demo/dist')
	},
	plugins: [htmlWebpackPlugin],
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@Components": path.join(__dirname, 'src/components')
		}
	},
	devServer: { port: 3002, open: true }
}