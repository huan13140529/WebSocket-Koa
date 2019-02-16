项目运行
```
npm install

npm run dev

客户端：打开client.html 文件
```
## 1. 什么是WebSocket?  
> WebSocket是一种在单个TCP连接上进行全双工通信的协议。  
使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。  
在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

## 2. 优点([参考维基](https://zh.wikipedia.org/wiki/WebSocket))
WebSocket与HTTP对比图
![WebSocket与HTTP对比图](https://raw.githubusercontent.com/haoliwq/blog/master/resource/Image/HTML5/WebSocket%E4%B8%8EHTTP%E5%AF%B9%E6%AF%94%E5%9B%BE.png "WebSocket与HTTP对比图")  

## 客户端例子
```
    const ws = new WebSocket('ws://localhost:8888');

    ws.onopen = () => {
        console.log('WebSocket onopen');
    }

    ws.onmessage = e => {
        console.log('WebSocket onmessage');
        console.log('WebSocket message received：', e);
        console.log('WebSocket data received：', e.data);
    }

    ws.onclose = e => {
        console.log("WebSocket onclose");
    };
```

1. WebSocket.onopen： 连接成功后调用
2. WebSocket.onmessage： 当接收到服务器消息时调用
2. WebSocket.onclose： 连接关闭后调用

## 服务端例子(koa)
```
  const Koa = require('koa');
  const WebSocket = require('ws');

  const app = new Koa();
  const ws = new WebSocket.Server({port: 8888});

  ws.on('connection', ws => {
      console.log('server connection');

      ws.on('message', msg => {
        console.log('server receive msg：', msg);
      });

      ws.send('Information from the server');
  });

  app.listen(3000);
```
## 运行结果
客户端
![WebSocket客户端运行结果](https://raw.githubusercontent.com/haoliwq/blog/master/resource/Image/HTML5/WebSocket%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%90%E8%A1%8C%E7%BB%93%E6%9E%9C.png "WebSocket客户端运行结果")  

服务端

![WebSocket服务端运行结果](https://raw.githubusercontent.com/haoliwq/blog/master/resource/Image/HTML5/WebSocket%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%BF%90%E8%A1%8C%E7%BB%93%E6%9E%9C.png "WebSocket服务端运行结果")  


## 名词解释
1. 握手：  一般创建WebSocket链接, 需要通过浏览器发出请求,服务器做出回应, 这个过程称为“握手”

## 参考链接
[WebSocket协议：5分钟从入门到精通](https://www.cnblogs.com/chyingp/p/websocket-deep-in.html)  
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket)