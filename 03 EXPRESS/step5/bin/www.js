#!/usr/bin/env node


var app = require('../app')
var http = require('http')
console.log(app)

http.createServer(app).listen(8090)
console.log('open http://localhost:8090')