var path = require('path');
module.exports = {    
    entry:  {
        app:'./App/main.ts'
    },
    output: {
        path: './wwwroot/dist',
        publicPath: './dist/',
        filename: '[name].bundle.js'
    },
    module: {        
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude : ['node_modules']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
            extensions: ['.js', '.ts']
    }
}


