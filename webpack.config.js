const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool:'source-map', //产生source-map 文件
    resolve:{
        modules:[path.resolve(__dirname,'source'),path.resolve('node_modules')]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./public/index.html')
        })
    ]

}