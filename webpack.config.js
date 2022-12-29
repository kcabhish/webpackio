const path = require('path');

let mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    mode: mode,
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    // Reference: https://webpack.js.org/configuration/devtool/
    devtool: "source-map",
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
};