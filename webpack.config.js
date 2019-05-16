const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')
console.log(path.resolve(__dirname))
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'webpack-number.js',
		// path: path.resolve(__dirname, 'dist'),
		path: path.resolve(__dirname, 'dist'),
		library: 'webpackNumbers',
		libraryTarget: 'umd'
		// publicPath: '/'
	},
	externals: {
		loadash: {
			commonjs: 'loadash',
			amd: 'loadash',
			root: '_'
		},
		// 'vue-router': 'vue-router',
		// 'jquery': 'jQuery'
	}
	plugins: [
		new HtmlWebpackPlugin({
			title: 'output management'
		}),
		new ManifestPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [
				'style-loader',
				'css-loader'
			]}, {
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}