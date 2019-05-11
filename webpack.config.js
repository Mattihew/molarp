const path = require('path');
const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*const {GenerateSW} = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');*/

/**
 * Generates a webpack config Object
 *
 * @param {{NODE_ENV: string}} env
 * @param argv
 * @returns {{}} webpack config
 */
module.exports = function (env, argv)
{
    env = env || {};
    const NODE_ENV = env.NODE_ENV || 'development';
    return {
        entry: {
            server: './src/server.ts',
            index: './src/index.tsx'
        },
        output: {
            filename: 'js/[name].js',
            path: path.resolve(process.cwd(), 'dist'),
            publicPath: '/'
        },
        devtool: 'eval-source-map',
        node: {
            fs: 'empty'
        },
        resolve: {
            extensions: ['.ts', ".tsx", ".js", ".jsx", ".json"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['awesome-typescript-loader']
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }]
                }
            ]
        },
        devServer: {
            port: 3000,
            contentBase: './dist',
            //inline: false,
            // overlay: {
            //     warning: true,
            //     errors: true
            // }
            staticOptions: {
                extensions: ['html']
            }
        },
        mode: NODE_ENV,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'vendors'],
                meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}

            }),
            /*new GenerateSW({
                clientsClaim: true,
                skipWaiting: true
            }),
            new WebpackPwaManifest({
                filename: '[name].[hash:8].[ext]',
                name: "Matt's OpenLayers And React Prototype",
                short_name: 'Molarp',
                description: 'My awesome Progressive Web App!',
                theme_color: '#000',
                background_color: '#000',
                crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
                icons: [
                    {
                        src: path.resolve('src/images/rsg_logo.png'),
                        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
                        destination: 'icons'
                    }
                ]
            }),*/
            new DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
                "process.env.PUBLIC_URL": JSON.stringify('')
            })
        ]
    };
};
