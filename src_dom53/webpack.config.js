const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './index.js',
        home: './assets/js/home.js',
        about: './assets/js/about.js',
        catalog: './assets/js/catalog.js',
        project: './assets/js/project.js',
        contacts: './assets/js/contacts.js',
        gallery: './assets/js/gallery.js',
        gallery_inner: './assets/js/gallery.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        allowedHosts: "all",
        compress: true,
        port: 8081,
        open: true,
        hot: true,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: false,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // Убран 'style-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['!index.html', '!images/**/*'],
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'home.html',
            filename: 'home.html',
            chunks: ['home', 'main'],
        }),
        new HtmlWebpackPlugin({
            template: 'about.html',
            filename: 'about.html',
            chunks: ['about', 'main'],
        }),
        new HtmlWebpackPlugin({
            template: 'catalog.html',
            filename: 'catalog.html',
            chunks: ['catalog', 'main'],
        }),
        new HtmlWebpackPlugin({
            template: 'project.html',
            filename: 'project.html',
            chunks: ['project', 'main'],
        }),
        new HtmlWebpackPlugin({
            template: 'contacts.html',
            filename: 'contacts.html',
            chunks: ['contacts', 'main'],
        }),
        new HtmlWebpackPlugin({
            template: 'gallery.html',
            filename: 'gallery.html',
            chunks: ['gallery', 'main'],
        }),
        new HtmlWebpackPlugin({
            template: 'gallery-inner.html',
            filename: 'gallery-inner.html',
            chunks: ['gallery_inner', 'main'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets/img', to: 'images' },
            ],
        }),
        new MiniCssExtractPlugin({ // Добавлен плагин MiniCssExtractPlugin
            filename: '[name].css', // Имя файла для извлеченного CSS
        }),
    ],
};
