var url = require('url')
var fs = require('fs')
var path = require('path')
var ejs = require('ejs')


function express() {

    var tasks = []

    var app = function(req, res){

        addQuery(req, res);
        addSend(req, res);
        addRender(req, res, app);

        var i = 0

        function next() {
            var task = tasks[i++]
            if(!task) {
                return
            }
            if(task.routePath === null || url.parse(req.url, true).pathname === task.routePath){
                task.middleWare(req, res, next)
            }else{
                next()
            }
        }

        next()
    };

    app.use = function(routePath, middleWare){
        if(typeof routePath === 'function') {
            middleWare = routePath
            routePath = null
        }

        tasks.push({
            routePath: routePath,
            middleWare: middleWare
        })
    }


    //声明一个空data数组，用来存放模版引擎
    app.data = {};

    //调用set，将模版引擎放入data数组中，key为文件名，value为路径
    app.set = function(key, value){
        app.data[key] = value;
    };

    //想使用时，调用get，从data中获取想试用的模版引擎的路径，结果传给res.render函数
    app.get = function(key){
        return app.data[key];
    };

    return app

}

express.static = function(staticPath){

    return function(req, res, next){
        var pathObj = url.parse(req.url, true)
        var filePath = path.resolve(staticPath, pathObj.pathname.substr(1))
        console.log(filePath)
        fs.readFile(filePath,'binary', function(err, content){
            if(err){
                next()
            }else {
                res.writeHead(200, 'Ok')
                res.write(content, 'binary')
                res.end()
            }
        })
    }
}

module.exports = express


function addQuery(req, res){
    var pathObj = url.parse(req.url, true);
    req.query = pathObj.query;
}

function addSend(req, res){
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
    }
}

function addRender(req, res, app){

    //render方法可以拼接模版引擎和data内容
    res.render = function(tplPath, data) {
                 //tplaPath为模版引擎的文件名，data为想传递进的信息

        var fullpath = path.join(app.get('views'), tplPath);
                  //获得模版引擎的完整路径 views路径+模版文件名
        ejs.renderFile(fullpath, data, {}, function(err, str){
              //使用ejs模块，会自动读取fullpath中的模版，并和data去做拼接
            if(err){  //如果出错了，503
                res.writeHead(503, 'System error');
                res.end();
            }else {   //如果没有出错
                res.setHeader('content-type', 'text/html');
                res.writeHead(200, 'Ok');
                res.write(str);
                res.end();
            }
        });

    };
}