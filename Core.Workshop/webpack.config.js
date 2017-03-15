var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: {
        app: './App/main.ts',
        vendors: ['jquery', 'bootstrap', 'axios']
    },
    output: {
        path: path.resolve(__dirname,'wwwroot/dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: ['node_modules']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.tmpl.html$/,
                loader: 'raw-loader'
            },
            {
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
                test: /\.css$/
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                use:  { 
                    loader: 'file-loader',
                    options: {
                        name : '[name].[ext]'
                    }
                }
            }

        ]
    },

    plugins: [
        new ExtractTextPlugin("site.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
}


