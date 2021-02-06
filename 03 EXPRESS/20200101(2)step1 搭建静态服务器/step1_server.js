/*
核心代码思路
function staticRoot(staticPath, req, res){
    var pathObj = url.parse(req.url, true)
    var filePath = path.join(staticPath, pathObj.pathname)
    var fileContent = fs.readFileSync(filePath,'binary')
    res.write(fileContent, 'binary')
    res.end()
}
var server = http.createServer(function(req, res){
    staticRoot(path.resolve(__dirname, 'static'), req, res)
})
server.listen(8080)
 */

/*
step1

- 前后端交互的原理：我们向服务器发送请求，服务器给我们返回数据
然而常见的服务器并不像step0中那样通过一个js代码解决问题，而是将不同文件分装在static目录下，并通过server.js文件来实现搭建

- 如何使用静态服务器
1 前提是需要准备好所有的项目相关文件:static文件夹(css html js imgs)和 server.js...
2 在terminal中执行server.js文件：进入到目标目录，输入node server.js回车
3 现在打开浏览器，在地址栏输入之前在server.js设置的地址即可登陆网页了。网页中同时会显示static目录中的所有信息
4 在webstorm中单机红色方块既可以停止server

- 创建server.js的核心思路
  1 require引入模块
  2 通过http.createServer()函数创建一个服务器，指定端口号，指定static路径，并将request和response都交与staticRoot()函数处理
  3 定义staticRoot()函数
       a 获取filePath路径
       b 使用fs.readFile()，根据filePath读取文件，并将读取的结果返回到客户端
 */

//引入模块
var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

//创建一个server，让所有域名为localhost:8090...的请求都会到达这个server，并将请求交给staticRoot()函数处理
var server = http.createServer(function(req, res){
    staticRoot(path.join(__dirname, 'step1_static'), req, res)
    //path.join()方法是将多个参数字符串合并成一个路径字符串
});

//服务器监听的端口号为8090
server.listen(8090);

console.log(__dirname);//__dirname代表着当前server.js文件所在的路径

console.log(path.join(__dirname, 'step1_static'));//将__dirname和static拼接成一个目标路径

console.log('visit http://localhost:8090' );

/*
- staticRoot()
参数：
          staticPath：  本案例使用了path.join(__dirname, 'static')
             在不同的电脑系统中，路径的表达方式不同，而使用path.join()可以生成符合所有当前系统的路径
          req 请求
          res 响应
 */
function staticRoot(staticPath, req, res){

    //获取request的路径
    console.log(staticPath)//会显示static目录的绝对路径
    console.log(req.url)//显示request中包含url的字段，例css/a.css或css/a.css?t=1等得

    /*
    ⚠️解析request.url
    正如上文中提到的，req.url获取到的路径不一定是可用的，很可能是类似css/a.css?t=1（url+query）的形式
    那么就需要通过url.parse()函数来做解析，摘取出url的部分
    返回值为一个url对象，而对象中的pathname属性值才是想要的结果
     */
    var pathObj = url.parse(req.url, true)

    //打印pathObj来查看对象（如server中不显示，则Ctrl+R刷新浏览器）
    console.log(pathObj);
    /*
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: [Object: null prototype] {},
      pathname: '/css/a.css',
      path: '/css/a.css',
      href: '/css/a.css'
    }
    -->其中的pathname即是服务器所需要的url -->pathObj.pathname
     */

    /*
    ⚠️在打开http://localhost:8090/页面时，浏览器在默认的情况下会去自动解析html格式的文件（各浏览器共同约定的），
    若想指定浏览器解析的文件，需要进行如下案例的操作：
        如果搜索的是localhost:8080/地址，那么需添加'index.html'路径来告知浏览器他需要解析的文件
     */
    if(pathObj.pathname === '/'){
        pathObj.pathname += 'index.html'
    }

    //得到的最终的请求路径为 staticPath + pathObj.pathname
    var filePath = path.join(staticPath, pathObj.pathname);
    /*
    通过以下地址则可以具体查到对应的信息
    http://localhost:8090/css/a.css
    http://localhost:8090/js/b.js
    http://localhost:8090/imgs/c.jpg
     */

    //读取filepath路径所对应的文件，通过fs模块，以二进制的方式异步读取文件
    fs.readFile(filePath, 'binary', function(err, fileContent){
        /*
        以二进制读取filepath中的文件，读取到的文件会返回到fileContent里，
        再通过res.write将fileContent以二进制的形式发送到客户端
         */
        //如果出错则报错404 Not Found
        if(err){
            console.log('404');
            res.writeHead(404, 'not found');
            res.end('<h1>404 Not Found</h1>');
        }else{    //如没出错则传递200，并将返回响应给客户端
            console.log('ok');
            res.writeHead(200, 'OK');
            res.write(fileContent, 'binary');
            res.end()
            //也可以设置content type
        }
    });

    /* 同步的读取数据方式，同理，
    ⚠️但是同步的方法没有err参数，当浏览器查询不存在的信息时，server就会出错并且关闭，这样是很不好的
       var fileContent = fs.readFileSync(filePath,'binary')
       res.write(fileContent, 'binary')
       res.end()
       */
}






