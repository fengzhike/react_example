var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
	entry:{
		build:"./app/index.jsx"
	},
	output:{
		path:"./build/",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:["style","css"],
				exclude:"/node_modules/"
			},
			{
				test:/\.jsx?$/,
				loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
				exclude:"/node_modules/",
				include:path.resolve(__dirname,"app")
			},
             {  
                test: /\.scss$/,
                loaders: ["style", "css", "sass"],
                exclude:"/node_modules/"
            }
		]
	},
	devServer:{

	},
	resolve:{
		extensions:['','.js',".css",'.jsx',".scss"]  //自动补全识别后缀
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"创新学堂-互联网众创平台",
			chunks:["build"]
		})
	]
}