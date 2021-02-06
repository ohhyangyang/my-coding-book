var url = require('url');
var fs = require('fs');
var path = require('path');


function express() {

    var tasks = [];

    //创建app函数，构建next循环逻辑
    var app = function(req, res){

        makeQuery(req);
        makeResponse(res);
        console.log(tasks);

        var i = 0;

        function next() {
            var task = tasks[i++];
            if(!task) {
                return
            }
            if(task.routePath === null || url.parse(req.url, true).pathname === task.routePath){
                task.middleWare(req, res, next);
            }else{
                next();
            }
        }

        next();
    };

    //创建app.use，用来添加中间件
    app.use = function(routePath, middleWare){
        if(typeof routePath === 'function') {
            middleWare = routePath;
            routePath = null
        }

        tasks.push({
            routePath: routePath,
            middleWare: middleWare
        })
    };


    return app

}

//创建服务于静态文件的中间件express.static函数
express.static = function(staticPath){
                 //staticPath代表static目录的路径
    //中间件返回了一个函数
    return function(req, res, next){
        var pathObj = url.parse(req.url, true);
                     //解析req.url，并获取一个pathObj对象
        var filePath = path.join(staticPath, pathObj.pathname.substr(1));
                     //文件的路径就是staticPath + pathObj.pathname
        console.log(filePath);
        fs.readFile(filePath,'binary', function(err, content){
            //读取文件
            if(err){  //如果读取不到文件，则执行next
                next()
            }else {   //如果读到了，则通过res.write发出去，并通过res.end终结请求
                res.writeHead(200, 'Ok');
                res.write(content, 'binary');
                res.end();
            }
        });
    }
};

module.exports = express;


function makeQuery(req){
    var pathObj = url.parse(req.url, true);
    req.query = pathObj.query;
}

function makeResponse(res){
    res.send = function(toSend){
        if(typeof toSend === 'string'){
            res.end(toSend);
        }
        if(typeof toSend === 'object'){
            res.end(JSON.stringify(toSend));
        }
        if(typeof toSend === 'number'){
            res.writeHead(toSend, arguments[1]);
            res.end();
        }
    };
}