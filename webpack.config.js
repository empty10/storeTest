const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool:'source-map', //产生source-map 文件
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./public/index.html')
        })
    ]

}