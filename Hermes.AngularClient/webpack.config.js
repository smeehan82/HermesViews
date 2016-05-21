const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const appPath = path.join(__dirname, 'app');
const buildPath = path.join(__dirname, 'build');

module.exports = {
    devServer: {
        contentBase: buildPath,
        inline: true,
        progress: true,
        hot: false,
        historyApiFallback: true,
    },
    devtool: 'eval',
    entry: path.join(appPath, 'index.ts'),
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.html'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(appPath, 'index.html'),
            hash: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    }
}