const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin')


module.exports = {
	mode: "development",
	entry: {
		bundle: path.resolve(__dirname, "src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean:true,
		assetModuleFilename: "[name][ext]",
	},
	module: {
		rules: [
			{ test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{ test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "My app",
			filename: "index.html",
			template: "src/template.html",
		}),
  ],
  devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		compress: true,
		open: true,
		hot: true,
	},
};