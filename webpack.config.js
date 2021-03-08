const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {NODE_ENV = 'production'} = process.env;
module.exports = {
  watch:NODE_ENV === 'development',
  externals: [ nodeExternals() ],
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  }
}