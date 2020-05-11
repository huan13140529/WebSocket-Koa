
/**
 * 基本服务
 */

// const http = require('http');
// const Koa = require('koa');
// const config = require('./config/baseConfig');

// const app = new Koa();
// const server = http.createServer(app.callback());

// server.listen(config.port);

/**
 * 读取模板文件
 */

//  const fs = require('fs');
//  const Koa = require('koa');
//  const app = new Koa();

//  const main = ctx => {
//      console.log(ctx);
//      ctx.response.type = 'html';
//      ctx.response.body = fs.createReadStream('./Doc/test.txt');
//  }

//  app.use(main);

//  app.listen(3000)

 /**
  * koa-router
  */

//   const Koa = require('koa');
//   const router = require('koa-router')(); // 引入实例化路由 或者 const router = new Router();

//   const app = new Koa();

//   const main = ctx => {
//       ctx.response.body = 'This is homepage';
//   };

//   const about = ctx => {
//       ctx.response.type = 'html';
//       ctx.response.body = '<p>This is about page!</p>'
//   };

//   router.get('/', main);
//   router.get('/about', about)

//   app.use(router.routes());
//   app.listen(3000);

/**
 * WebSocket
 */
  const Koa = require('koa');
  const WebSocket = require('ws');

  const app = new Koa();
  const ws = new WebSocket.Server({port: 8888});

  ws.on('connection', ws => {
      ws.on('message', msg => {
        console.log('server receive msg：', msg);
        if(msg === '你好') {
          ws.send('遇见你真高兴');
        } else if(msg === '哈哈') {
          ws.send('小哥哥，人家单身呢');
        } else if(msg === '无聊') {
          ws.send('小哥哥，不要走嘛！和人家多聊一会嘛');
        } else if(msg === '在吗') {
          ws.send('小哥哥，我一直都在你身边！');
        } else {
          ws.send(msg)  //接收到啥就返回啥
        }
      });
      // ws.send('有点意思');
  });

  app.listen(3009);


