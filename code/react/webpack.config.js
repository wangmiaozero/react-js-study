const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
  template: path.join(__dirname, './src/index.html'), // 指定 模板文件
  filename: 'index.html' // 指定内存中生成的首页的名称
})

// 导入 webpack 的配置对象
module.exports = {
  // 必须要有 mode 属性, 有两个可选值：  development   production
  mode: 'development',
  // 注意： 默认，4.x 的 webpack 中，约定了 打包的入口 是 src -> index.js  出口 是 dist -> main.js
  plugins: [ // 插件节点
    htmlPlugin
  ],
  module: {
    rules: [
      { test: /\.jpg|png|gif|bmp$/, use: 'url-loader' }, // 处理图片
      { test: /\.ttf|svg|eot|woff|woff2$/, use: 'url-loader' }, // 处理字体文件
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理普通CSS样式表
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] }, // 处理 .scss 样式表的loader
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // babel-loader
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 可省略的扩展名
    alias: {
      "@": path.join(__dirname, './src') // 设置别名
    }
  }
}