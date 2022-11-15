const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => ({
  mode: "development",
  entry: {
    "ode-ts-client.js": "./src/ts/index.ts",
    "ode-ts-client.mjs": {
      import: "./src/ts/index.ts",
			library: {
				type: 'module'
			},
    },
    "ode-ts-client.cjs": {
      import: "./src/ts/index.ts",
			library: {
				type: 'commonjs2'
			},
    },
  },
  experiments: {
    outputModule: true,
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, env.build_target),
  },
  // @see https://github.com/TypeStrong/ts-loader#devtool--sourcemaps
  devtool: "inline-source-map",
  resolve: {
    // Resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  module: {
    rules: [
      // ts-loader will handle files with `.ts` or `.tsx` extensions
      { test: /\.tsx?$/, loader: "ts-loader", type: 'javascript/auto' },
    ],
  },
});