const path = require('path');

const config = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    devtool: "source-map",
    output: {
        path: path.resolve('dist'),
        filename: `index.js`,
        library: 'tegridy',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            // load js/jsx files
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;
