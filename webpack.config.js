var path = require('path');
var webpack = require('webpack');
const npm_package = require('./package.json')
const config = {
	entry : './src/index.jsx',
	output : {
		path: path.resolve(__dirname,'dist'),
		filename: 'mcl.js',
		libraryTarget: 'umd'
	},
	mode: 'production',
	target: 'web',
	plugins: [],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			"@Components": path.join(__dirname, 'src/components')
		}
	},
	module: {
		rules: [
			{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	}
}
module.exports = config;