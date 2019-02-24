const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    entry: {
     app: path.join(__dirname, 'src/index.js')
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new Dotenv({
            path: './.env',
            safe: true,
            silent: true,
            defaults: false,
        })
    ],
};
