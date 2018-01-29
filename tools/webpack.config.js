import pkg from '../package.json';
import {resolve} from 'path';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import CompressionPlugin from 'compression-webpack-plugin';
import {BannerPlugin} from 'webpack';
// import BabiliPlugin from 'babili-webpack-plugin';

// hack for Ubuntu on Windows
try {
  require('os').networkInterfaces();
} catch (e) {
  require('os').networkInterfaces = () => ({});
}

const PRODUCTION = process.argv.includes('-p');
const devtool = PRODUCTION ? false : 'cheap-module-eval-source-map';
const outputDir = resolve(__dirname, '../', 'demo/assets/js/');

const bannerTemplate = [
  `${pkg.name} - ${pkg.homepage}`,
  `Version: ${pkg.version}`,
  `Author: ${pkg.author}`
].join('\n');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

const webpackConfig = {
  context: outputDir,
  entry: {
    'form-builder': resolve(__dirname, '../', pkg.config.files.formBuilder.js),
    'form-render': resolve(__dirname, '../', pkg.config.files.formRender.js)
  },
  output: {
    path: outputDir,
    publicPath: '/assets/js/',
    filename: '[name].js'
  },
  module: {
    rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.lang$/,
      loader: 'file?name=[path][name].[ext]&context=./src'
    }, {
      test: /\.scss$/,
      use: extractSass
      .extract({
        fallback: {
          loader: 'style-loader',
          options: {
            attrs: {
              class: 'formBuilder-injected-style'
            }
          }
        },
        use: [
          {
            loader: 'css-loader',
            query: {
              minimize: false,
              sourceMaps: !PRODUCTION
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['last 2 versions'],
                  cascade: true,
                  remove: true
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMaps: !PRODUCTION
            }
          }
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
 
    new BannerPlugin(bannerTemplate)
  ],
  devtool,
  resolve: {
    modules: [
      resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.scss']
  },
  devServer: {
    inline: false,
    contentBase: 'demo/',
    noInfo: false
  }
};

module.exports = webpackConfig;
