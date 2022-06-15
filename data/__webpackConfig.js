module.exports = {
file: './webpack.config.js',
content: `// Webpack Config
const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const devtool = mode === 'development' ? 'eval-cheap-source-map' : false;
const stats = mode === 'development' ? 'errors-warnings' : { children: false };
const sass = require('dart-sass');

module.exports = {
  mode: mode,
  devtool: devtool,
  entry: glob.sync('./src/js/bundles/**/*.js').reduce((acc, path) => {
    const entry = path.replace(/^.*[\\\/]/, '').replace('.js','');
    acc[entry] = path;
    return acc;
  }, {}),
  output: {
    filename: './assets/bundle.[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, 'src/styles/'),
      Helpers: path.resolve(__dirname, 'src/styles/helpers/')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/bundle.[name].css.liquid',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/liquid/sections/*.liquid',
          to: 'sections/[name][ext]'
        },
        {
          from: 'src/liquid/layout/*.liquid',
          to: 'layout/[name][ext]'
        },
        {
          from: 'src/liquid/templates/**/*.liquid',
          to: 'templates/[name][ext]',
          noErrorOnMissing: true
        },
        {      
          from: 'src/liquid/snippets/**/*.liquid',
          to: 'snippets/[name][ext]'
        },
        {      
          from: 'src/liquid/config/**/*',
          to: 'config/[name][ext]'
        },
        {
          from: 'src/assets/images/*',
          to: 'assets/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'src/assets/fonts/*',
          to: 'assets/[name][ext]',
          noErrorOnMissing: true
        }
      ]
    })
  ],
  stats: stats,
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  }
}

if (mode === 'development') {
  module.exports.plugins.push(
    new WebpackShellPluginNext({
      onBuildStart:{
        scripts: ['echo Webpack build in progress...🛠'],
      }, 
      onBuildEnd:{
        scripts: ['echo Build Complete 📦'],
        parallel: true
      }
    })
  )
}`}
