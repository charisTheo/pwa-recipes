const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MediaQueryPlugin = require('media-query-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// const WebpackShellPlugin = require('webpack-shell-plugin');
// const exec = require('child_process').exec;
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const OfflineRequestsWebpackConfig = require('./webpack.config.offline-requests');
const CartAbandonNotificationWebpackConfig = require('./webpack.config.cart-abandon-notification');
const PushExamplesWebpackConfig = require('./webpack.config.push-examples');

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    favicon: 'src/favicon/favicon.ico',
    template: path.resolve(__dirname, 'src/index.ejs'),
    chunks: ['home'],
    inlineSource: 'src\/css\/.css$'
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.js'),
      to: 'bower_components/webcomponentsjs/[name].[ext]'
    },
    {
      from: path.resolve(__dirname, 'src/img'),
      to: path.resolve(__dirname, 'build/img'),
    },
    {
      from: path.resolve(__dirname, 'src/favicon'),
      to: path.resolve(__dirname, 'build/favicon'),
    },
    'src/offline.html',
    'src/manifest.json',
    'src/CNAME'
  ]),
  new InjectManifest({
    swSrc: 'src/service-worker.js',
    exclude: [/service-worker\.js/, /\.DS_Store$/, /\/unoptimised\/.+\.jpg/, /CNAME/, /\/pages\//],
  }),
  new MediaQueryPlugin({
    include: true,
    queries: {
      'screen and (min-width: 767px)': ''
    }
  })
];

module.exports = [
  OfflineRequestsWebpackConfig,
  CartAbandonNotificationWebpackConfig,
  PushExamplesWebpackConfig,
  {
    mode: 'none',
    // Tell Webpack which file kicks off our app.
    entry: {
      home: path.resolve(__dirname, 'src/js/index.js'),
      // ? importing from inside of home.js chunk -> tabs: path.resolve(__dirname, 'src/js/tabs.js'),
    },
    // Tell Weback to output our bundle.js
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
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
          // raw-loader, then polymer-webpack-loader and finally hand the output to
          // babel-loader. This let's us transpile JS in our `<script>` elements.
          use: [
            { loader: 'babel-loader' },
            { loader: 'polymer-webpack-loader' },
            { loader: 'raw-loader' }
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
            "css-loader",
            MediaQueryPlugin.loader
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
  }
];



//     filename: ({ chunk }) => {
//       switch (chunk.name) {
//         case 'offlineRequests':
//           return 'offline-requests/[name].js'
//         default: 
//         case 'cartAbandonNotification':
//           return 'cart-abandon-notification/[name].js'
//         default: 
//         case 'pushExamples':
//           return 'push-examples/[name].js'
//         default: 
//           return '[name].js';
//       }
//     },
//     path: path.resolve(__dirname, 'build')