/*
（[]为需要获取数据的情况，也有可能不需要数据直接回复response）
 
 1 EXPRESS server收到客户请求，app.get() (from app.js)
[2] 从database，通过mongoose的schema创建数据 或 collection.find()获取数据 (from model.js)
 3 通过res.render( "view.jsx" [, data] )，[将数据引入view，] 进行渲染 (from view.jsx)
 4 将从backend渲染的页面发送给client
*/