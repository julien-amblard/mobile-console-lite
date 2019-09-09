var path = require('path');
var webpack = require('webpack');
const config = {
	entry : './src/app.jsx',
	output : {
		path: path.resolve(__dirname,'dist'),
		filename: 'index.js',
		libraryTarget: 'umd'
	},
	mode: 'production',
	target: 'web',
	plugins: [],
	resolve: {
		extensions: ['.js', '.jsx']
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
					{ loader: 'css-loader', options: { minimize: true } },
					{ loader: 'sass-loader' }
				]
			}
		]
	},
	devtool: "source-map"
}
module.exports = config;