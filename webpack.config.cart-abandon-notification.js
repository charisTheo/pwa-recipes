const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

const INPUT_DIRECTORY = 'src/pages/cart-abandon-notification';
const OUTPUT_DIRECTORY = 'build/cart-abandon-notification';
const TEMPLATE_FILE_NAME = 'cart-abandon-notification';
const CHUNK_NAME = 'cartAbandonNotification';

const plugins = [
  new HtmlWebpackPlugin({
    favicon: `${INPUT_DIRECTORY}/favicon/favicon.ico`,
    template: path.resolve(__dirname, `${INPUT_DIRECTORY}/${TEMPLATE_FILE_NAME}.ejs`),
    chunks: [CHUNK_NAME],
    inlineSource: `/${INPUT_DIRECTORY}\/css\/.css$`
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, `${INPUT_DIRECTORY}/img`),
      to: path.resolve(__dirname, `${OUTPUT_DIRECTORY}/img`),
    },
    {
      from: path.resolve(__dirname, `${INPUT_DIRECTORY}/favicon`),
      to: path.resolve(__dirname, `${OUTPUT_DIRECTORY}/favicon`),
    },
    `${INPUT_DIRECTORY}/service-worker.js`,
    `${INPUT_DIRECTORY}/manifest.json`
  ]),
  new InjectManifest({
    swSrc: `${INPUT_DIRECTORY}/service-worker.js`,
    exclude: [/(service-worker|index)\.js/, /\.DS_Store$/, /\/unoptimised\/.+\.jpg/]
  })
];

module.exports = {
  mode: 'none',
  entry: {
    [CHUNK_NAME]: path.resolve(__dirname, `${INPUT_DIRECTORY}/js/index.js`),
  },
  output: {
    // filename: ({ chunk }) => {
    //   chunk.name === CHUNK_NAME ? DIRECTORY_NAME + '/[name].js' : '[name].js'
    // },
    filename: '[name].js',
    path: path.resolve(__dirname, OUTPUT_DIRECTORY)
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
  plugins: [...plugins]
};