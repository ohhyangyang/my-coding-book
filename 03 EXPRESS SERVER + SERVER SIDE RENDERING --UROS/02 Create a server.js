/*
- Create a server
  127.0.0.1 -> loop back adress, AKA localhost
  192.168.65.212  -> router area adrress，属于IP地址的C类地址，属于保留IP，专门用于路由器设置。
  port -> 就如adrress中的很多门

-port
   0--65535 ports range
  0--1023 reserved by computer.例如 TCP/IP, Memory

*/

const http = require('http'); //引入http
const fs = require('fs');

//创建server
const server = http.createServer((request,response)=>{
    console.log('Reqeust reached the server!!')

    // response.write('Ge away!') // Set HTTP response body
    // response.end() //sends the response to the client ⚠️⚠️ 如果不写end()，就会使浏览器一直等待！！！
    if(request.url === "/"){

        response.write("Home route!!");
        response.end();
    }

    else if(request.url === "/about"){

        response.write("My name is Yang");
        response.end();
    }
    else if(request.url === "/index.html"){

        fs.readFile(__dirname + "/index.html",'utf8',(error,loadedFile)=>{
            response.write(loadedFile);
            response.end();
        })
      
    }
    else{
        
        response.statusCode=404;
        response.write("404 page");
        response.end();
    }
    
}); 

server.listen(3001,()=>{
    console.log('Server is running');

    //在terminal中，node外，运行node server.js回车
})
