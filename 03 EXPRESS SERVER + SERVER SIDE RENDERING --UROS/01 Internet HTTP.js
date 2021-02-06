/*
- HTTP Protocol
  connection less 只有在client发送请求和获取reponse时，和server建立connection
  
  - 基本结构
    start line
    HTTP headers
    empty line
    body

  - HTTP Request
    Verb & URL & Version
    Resquest Header
    Request Message

  - HTTP Response
    Response Code & HTTP Version
    Response Header
    Response Message
  
  - GET: get data, 没有request body
    POST: sent data and create a resource，有body
    PUT: update a resource
    PATCH: update a resource
    DELETE: delete a resource

  - DNS (Domin Name System) 格式例如：
    121.12.23.12:80  https://xxx.com/
    
    每个domin都拥有唯一的IP Address，例如github
    每次发送请求都会先通过DNS来获取domin的IP Adrress
    https://www.submarinecablemap.com/#/landing-point/sines-portugal
  
  




    -curl 从terminal向google获取response
      curl -i -H "Accept:text/html" https://www.google.com/

    -curl 从terminal向google发送request
      GET/ HTTP/2
      Host: www.google.com
      USer-Agent:curl/7.64.1
      Accept: text/html


*/