const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HelloWorldPlugin =require('./HelloWorldPlugin');

module.exports = {
  plugins: [new HelloWorldPlugin({ options: true })],
  watch:true,
  externals: [ nodeExternals() ],
  entry: './src/index.ts',
  mode: 'development',
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