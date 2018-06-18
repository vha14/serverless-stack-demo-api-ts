const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  // Generate sourcemaps for proper error messages
  devtool: 'inline-source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  // Run ts-loader on all .ts files and skip those in node_modules
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  }
};

