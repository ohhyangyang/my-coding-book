/*
step0

- 前后端交互的本质为：
客户端向服务器发送请求，服务器为我们返回数据
发送请求时，会附带信息，如请求url，或用get post等提交的一些query参数
返回数据时，会加一个header和一个status code，把数据发出去

- 如何搭建一个最简单的server
1 http.createServer()函数创建server
2 server.listen()指定端口号

- 如果端口号被占用应该如何处理
一个端口被占用时，会显示 Error: listen EADDRINUSE: address already in use XXX
1 打开terminal
2 查找该端口号当前整备什么进程占用，输入sudo lsof -i:端口号
3 通过返回的结果查找当前端口对应的PID
4 输入sudo kill PID值
（注意通过"活动监视器"可查询到当前的PID正在进行什么活动）
 */
//引用http 模块
var http = require('http')

//创建一个服务器
var server = http.createServer(function(request, response){
    //使用response参数将请求发到前台浏览器中

    //使用setTimeOut，放缓了计算机的速度（2s），这样可以很明显地展示白屏等出现的问题
    setTimeout(function(){
        response.setHeader('Content-Type','text/html; charset=utf-8')
        /*
        - 设置头部的content type
        用来告诉浏览器发送的是什么东西，浏览器需要按照什么格式去解析

        如案例中告诉浏览器：发送的文件类型为text/html，charset为utf-8

        那么如何找到此部分内容？
        使用chrome打开localhost:8080,
        右键 - 检查 - Network - Ctrl+R刷新 - 点击出现的localhost - Headers - Response Headers - Content-Type
        设置的内容就出现在此项中

        ⚠️如果没设置Content Type，那么浏览器会根据文件的后缀来自动匹配并渲染
         */

        response.writeHead(200, 'haha')
        /*
        - 向请求的客户端发送响应头部信息，告诉浏览器我的信息的状态是什么（根据http协议）
        一个好的Http Status Code状态码给使用者一个很好的响应，比如200表示正常成功，201表示创建成功，409冲突，404资源不存在等等

        在Headers - General 的 Status Code 中可以找到此内容
         */

        //然后再如下通过 reponse.write() 发送文件中的内容
        response.write('<html><head><meta charset="gbk" /></head>')
        /*
        ⚠️⚠️在Response Headers和html的meta标签中都设置了charset，那么由于Response Headers里面设置的优先级是最高
        所以即使在html中设置了gbk格式，依然会因为Response Headers中的设置而使用utf-8格式解码
        这里属于后台工程师的操作领域，意味着即使前端工程师写错了charset而产生了乱码，也可以通过后台纠正过来
         */
        response.write('<body>')
        response.write('<h1>加油杨歌</h1>')
        response.write('</body>')
        response.write('</html>')

        //最后以 response.end() 结束
        response.end()
    },2000);
})

console.log('open http://localhost:8090')

//服务器会监听一个端口（案例中选择了8080），当请求到达server，server服务器就能监听到该请求，并把请求传递到上面回调函数的request参数中
server.listen(8090);

//输入"localhost:8080"到浏览器地址栏，显示"你好" ，那么当前打开的就是运行在当前电脑里的一个网站
//⚠️localhost对应的是127.0.0.1，因此也可以写成127.0.0.1:8080