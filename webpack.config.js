const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = () => {
    return {
        entry: {
            path: path.resolve(__dirname, 'src', 'index.js')
        },

        output: {
            publicPath: '/'
        },

        // output: {
        //     path: path.resolve(__dirname, 'production', 'dist'),
        //     filename: '[name].js'
        // },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['react', 'es2015'],
                                plugins: ['transform-object-rest-spread']
                            }
                        }
                    ]
                },
                {
                    test: /\.s[c,a]ss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|svg|gif|eot|ttf|woff|woff2)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: '[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },

        devServer: {
            historyApiFallback: true
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html')
            })
        ]
    }
};

module.exports = config;
