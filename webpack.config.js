module.exports = {
    mode: "development",
    modules: {
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
    devServer: {
        contentBase: "./dist"
    }
};