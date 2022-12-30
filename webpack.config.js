const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    mode: mode,
    module: {
        rules:[
            {
                test: /\.s?css$/i,
                use:[MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: [
           ".js", ".jsx"
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    // Reference: https://webpack.js.org/configuration/devtool/
    devtool: "source-map",
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
        // enabling hot module reload (HMR)
        hot: true,
    },
};