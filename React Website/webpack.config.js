//entry =output
const path =require('path');

module.exports={
entry:'./src/app.js',
output:{
    path:path.join(__dirname,'public'),
    filename:"bundle.js"
},
module:{
    rules:[{
        loader:'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
    },{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    }]
},
devtool:'cheap-module-eval-source-map'
};