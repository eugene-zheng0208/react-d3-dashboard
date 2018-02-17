var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/index'
    ],
    module: {
        loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/
        },
      { test: /\.s?css$/, loader: 'style!css!sass' }

        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
