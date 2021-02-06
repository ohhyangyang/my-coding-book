/*
- req
req.path 获取url   https://expressjs.com/es/api.html#req.path
req.query 获取查询query   https://expressjs.com/es/api.html#req.query
req.params 获取路径参数   https://expressjs.com/es/api.html#req.params
req.method  获取 GET, POST, PUT, and so on   https://expressjs.com/es/api.html#req.method
req.headers 获取请求头   https://expressjs.com/es/api.html#req.headers

-res  ⚠️⚠️需要输入以下的代码来完成用户的请求
res.send()
res.sendFile()
res.render()
res.redirect()

-中间件
*/
const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser"); //为了signup 的 POST request
const morgan = require("morgan");


const app = express();
const PORT = 3000;

//SET THE VIEW ENGINE
//set the folder containing the niew/templates '.jsx' file
app.set("views", __dirname + "/views");
//set 'express-react-views' as the view engine use for rendering HTML
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());
//自定义中间件module
function printBanana(req, res, next) {
  console.log("B A N A N A");
  next();
}





//MIDDLEWARE:  (⚠️⚠️⚠️所有的用户请求都要先通过所有中间件进行解析等等)
//设置static文件
app.use(express.static(__dirname + "/public"));
//pasrse application/x-www-form-urlencoded  body-parser解析body
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json  body-parser解析json
app.use(bodyParser.json());
//每次会返回处理用户请求的结果log
/*
例如：
   GET /signup-page 404 0.491 ms - 150
   GET /search 200 2.496 ms - -
*/
app.use(morgan("dev"));
//⚠️⚠️npm i morgan --save-dev
//测试自定义中间件
app.use(printBanana);






//ROUTES:
//ROUTES1 获取用户动态路径 /users/:xxx
app.get("/users/:username", (req, res, next) => {
  console.log(req.params); //⚠️⚠️会根据browser的搜索结果变化 { username:xxx }

  res.send();
});

app.get("/users/:userId/booking/:bookingId", (req, res, next) => {
  console.log(req.params); //⚠️⚠️会根据browser的搜索结果变化 { userId:xxx , bookingId:xxx }
  //从URL获取IDs
  const userId = req.params.userId;
  const bookingId = req.params.bookingId;

  //fetch()
  res.send();
});

//ROUTES2 获取用户的 QUERY STRING /search? q=weather+today
//https://www.google.com/search?  q=weather+today  &  sourceid=chrome  &  ie=UTF-8
//localhost:3000/search?city=Barcelona&bootcamp=webdev
app.get("/search", (req, res, next) => {
  //https://expressjs.com/es/api.html#req.query
  console.log(req.query); //⚠️⚠️⚠️{ city: 'Barcelona', bootcamp: 'webdev' }
  res.send();
});

//ROUTES3 渲染form表单页面
app.get("/search-form", (req, res, next) => {
  console.log("rendering start");
  res.render("Search");
});

//ROUTES3 获取form表单的get结果
app.get("/search-form-data", (req, res, next) => {
  //
  console.log(req.query); //⚠️⚠️ { searchString: 'xxx' }
  res.send();
});

//ROUTES4 渲染signup页面
app.get("/signup", (req, res, next) => {
  res.render("Signup");
});

//ROUTES4 获取signup表单的post结果   ⚠️⚠️⚠️不要使用同一个路径给同时给GET和POST
app.post("/signup-form-data", (req, res, next) => {
  console.log(req.body); //undefined
  /*
    [Object: null prototype] {
       emailAddress: 'yang@gmail.com',
       passwordStr: '123'
    }
    ⚠️⚠️⚠️ 需要添加 bodyParser 中间件来获取 body，否则会返回 undefined
    */
  res.send();
});

//START THE SERVER
app.listen(PORT, () => {
  console.log("Server is running at port" + PORT);
});
