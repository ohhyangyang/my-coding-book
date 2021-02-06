/*
⚠️express.js为express框架的核心代码，定义了app.use-->如何添加中间件 以及 app-->执行中间件函数的逻辑，以供app.js只用
 */
//应用url
var url = require('url');

//创建一个express函数，专门用来创建app函数和它的app.use方法，以供app.js使用
function express() {

    //声明一个tasks空数组，数组中将通过app.use装入所有注册的中间件
    var tasks = [];

    /*
    首先，从www.js已知，http.createServer()传递的app一定要是一个类似function(req,res)形式的函数，用来解析执行req，并返回res
    因此，创建app()函数，其中主要定义了next()循环，制定中间件如何匹配并处理req的规则，判断被app.use封装在tasks中的中间件是否和req匹配
    每个中间件都拥有一个索引i
    如果中间件为空对象，那么什么都不做
    如果该中间件是普通的中间件 或者 req.url的pathname和该中间件的routePath相匹配，那么则执行该中间件
    如果未匹配上，则执行next()
     */
    var app = function(req, res){

        //通过makeQuery()和makeResponse()优化补充req和res的功能
        makeQuery(req);
        makeResponse(res);

        var i = 0;

        /*
        创建next()循环函数，next()内部有一个循环，每次循环都会从tasks中拿出一个中间件来和req匹配
        匹配成功，则执行对应的中间件
        匹配失败，则循环到下一个中间件
        直到循环到res.send()输出响应为止

        而如果当前中间件没有终结req，并且next没有被调用，那么请求将被挂起，
        后边定义的中间件将得不到被执行的机会。
         */
        function next() {
            //从tasks中拿到一个中间件
            var task = tasks[i++];

            //如果中间件为不存在，那么什么都不做
            if(!task) {
                return
            }

            //如果task为没有routePath只有middleWare 或者 task方的routePath可以和req.url方的pathname匹配，则执行该task的中间件函数
            if(task.routePath === null || url.parse(req.url, true).pathname === task.routePath){
                task.middleWare(req, res, next);
            }else{
                //如果说未匹配上，则执行next，去和下一个中间件做匹配
                next();
            }
        }

        next();//启动刚刚创建的next循环
    };


    /*
     创建app.use()，将所有注册过的任务按逻辑封装到tasks数组中
     参数分别为路由routePath和中间件middleWare
       如果app.use(fn)
       那么{
            routePath:null,
            middleWare:fn
           }
       如果app.use("/a",fn)
       那么{
            routePath:"/a",
            middleWare:fn
           }
    */
    app.use = function(routePath, middleWare){
        if(typeof routePath === 'function') {
            middleWare = routePath;
            routePath = null;
        }

        tasks.push({
            routePath: routePath,
            middleWare: middleWare
        });
    };

    return app

}

express.static = function(path){

    return function(req, res){

    }
};

module.exports = express;

//创建makeQuery函数，用来解析query对象，并绑定到req上
function makeQuery(req){
    var pathObj = url.parse(req.url, true);
    req.query = pathObj.query
}

//创建makeResponse函数，增加了一个res.send方法，使得其可以发送多种类型的数据（原生的nodejs中的res.write()只可以传递字符串）
function makeResponse(res){
    res.send = function(toSend){
        if(typeof toSend === 'string'){
            res.end(toSend)
        }
        if(typeof toSend === 'object'){
            res.end(JSON.stringify(toSend))
        }
        if(typeof toSend === 'number'){
            res.writeHead(toSend, arguments[1]);
            res.end()
        }
    };
}