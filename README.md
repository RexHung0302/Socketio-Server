## Socketio-Server

![Socket.io Logo](/socket_io_logo.png)

這是一個基於 **Node.js Express** 建立的後端專案，專門用來提供前端專案聊天室的功能，使用 [Socket.io](https://socket.io/) 來提供。

基本功能為：

1. 建立聊天室

2. 聊天室/頻道 分群聊天 - [Socket.io Rooms](https://socket.io/docs/v4/rooms/#default-room)

3. 註解有 **Namespace** 的功能，需要的使用者可自行開啟 - [Socket.io Namespace](https://socket.io/docs/v4/namespaces/#main-namespace)

4. **Socket.io** 使用 **module.export** 方式讓 **API** 那邊可以直接進行推播，可帶參數 **msg** 在 **Body**，路由為 `/chat` 的 **post**。

5. 可直接清除所有聊天室，透過 `/chat/delete-all-rooms` 的 **delete**。

> **介紹文章可參考 [[NodeJS Become A Full Stack Developer] — 透過 Socket.io 來製作即時聊天室吧](https://rexhung0302.github.io/2021/10/01/20211001/#more)**

---

## 使用方法

```
1. $ git clone https://github.com/RexHung0302/Socketio-Server.git

2. $ cd Socketio-Server // 或你 clone 下來的專案名稱

3. npm i // 或推上 Heroku 或 你的 Server

4. npm start // 如果不是在本地就不用跑這個
```

---

## 備註

1. 這個專案僅提供實驗性質，請勿使用在盈利或者工作上，因作者不保證功能無瑕疵或者有任何 **Bug**，請自行承擔風險。

2. 前端專案可參考[連結](https://github.com/RexHung0302/Socketio-Client)

---

## 相關介紹文章

[【筆記】Socket，Websocket，Socket.io 的差異 ](https://leesonhsu.blogspot.com/2018/07/socketwebsocketsocketio.html)

[socket.io namespaces and rooms (译)](https://segmentfault.com/a/1190000021255876)

[你知道 socket.io 中 connect 事件和 connection 事件的区别吗?](https://segmentfault.com/a/1190000012915401)
