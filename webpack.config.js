const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');
// const WebpackShellPlugin = require('webpack-shell-plugin');
// const exec = require('child_process').exec;

const plugins = [
  // This plugin will generate an index.html file for us that can be used
  // by the Webpack dev server. We can give it a template file (written in EJS)
  // and it will handle injecting our bundle for us.
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.ejs'),
    inlineSource: 'src\/css\/.css$'
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.js'),
      to: 'bower_components/webcomponentsjs/[name].[ext]'
    },
    {
      from: path.resolve(__dirname, 'img'),
      to: path.resolve(__dirname, 'build/img'),
    },
    {
      from: path.resolve(__dirname, 'favicon'),
      to: path.resolve(__dirname, 'build/favicon'),
    },
    'service-worker.js',
    'manifest.json'
  ]),
  new InjectManifest({swSrc: 'service-worker.js'})
];

module.exports = {
  // Tell Webpack which file kicks off our app.
  entry: path.resolve(__dirname, 'src/js/index.js'),
  // Tell Weback to output our bundle.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Tell Webpack which directories to look in to resolve import statements.
  // Normally Webpack will look in node_modules by default but since we’re overriding
  // the property we’ll need to tell it to look there in addition to the
  // bower_components folder.
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'bower_components')
    ]
  },
  // These rules tell Webpack how to process different module types.
  // Remember, *everything* is a module in Webpack. That includes
  // CSS, and (thanks to our loader) HTML.
  module: {
    rules: [
      {
        // If you see a file that ends in .html, send it to these loaders.
        test: /\.html$/,
        // This is an example of chained loaders in Webpack.
        // Chained loaders run last to first. So it will run
        // polymer-webpack-loader, and hand the output to
        // babel-loader. This let's us transpile JS in our `<script>` elements.
        use: [
          { loader: 'babel-loader' },
          { loader: 'polymer-webpack-loader' }
        ]
      },
      {
        // If you see a file that ends in .js, just send it to the babel-loader.
        test: /(^@polymer|\.js$)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { 
              insert: 'head',
              injectType: 'singletonStyleTag'
            },
          },
          "css-loader"
        ]
      },
      {
        test: /.(jpg|jpeg|png|svg)$/,
        use: ['file-loader'],
      },
    ]
  },
  // Enable the Webpack dev server which will build, serve, and reload our
  // project on changes.
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000
  },
  plugins: [...plugins]
};