const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'production', 
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader', 
                ],
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader', 
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                    {
                        loader: 'buble-loader',
                        options: {
                            objectAssign: 'Object.assign',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css', 
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(), 
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        watchFiles: ['src/**/*'],
    },
    resolve: {
        extensions: ['.js', '.scss'],
    },
};
