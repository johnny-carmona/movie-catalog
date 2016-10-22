var path = require('path');
var CopyWevpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackCleanPlugin = require('webpack-clean-plugin');


module.exports = {
    entry: "main.js",
    context: path.join(__dirname, 'app'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: "scripts/bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: "./build",        
        outputPath: path.join(__dirname, 'build')
    },
    module: {
        loaders:[
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader!sass-loader")
            },
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/, 
                loader: 'file-loader?name=/styles/fonts/[hash].[ext]' 
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        root: path.resolve('app'),
        extensions: ['', '.js']
    },
    plugins: [
        new WebpackCleanPlugin({
            on: "run",
            path: './build'
        }),
        new ExtractTextPlugin('/styles/style.css', {
            allChunks: true
        }),
        new CopyWevpackPlugin([
            {
                from: './html',
                to: './',
                force: true
            }
        ])        
    ]
};