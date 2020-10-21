// 引入 express 框架 -> 需 npm 安装
const express = require('express');

/**
 * 初始化框架,并将初始化后的函数给予 '当前页面'全局变量 app
 * 也就是说, app 是 express 
 */
const app = express();

/* 配置框架环境 S */


// 设置 public 为静态文件的存放文件夹
app.use('/public', express.static('public'));

/* 配置框架环境 E */
app.get('/', function(req, res) {
  res.send('Hello World');
})

const server = app.listen(8081, function() {
  const host = server.address().address
  const port = server.address().port  
  console.log(`服务器启动在：localhost:${port}`)
})