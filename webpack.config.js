var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    name: 'client',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './angular',
        port: 9999
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:9999',
        path.resolve(__dirname, 'angular/main.js')
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.css$/, include: path.resolve(__dirname, 'angular'), loader: 'style-loader!css-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'angular'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:9999'})
    ]
};
