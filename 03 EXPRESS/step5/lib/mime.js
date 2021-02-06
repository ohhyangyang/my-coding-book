//mimeType表示资源的媒体类型
var url = require('url');
var mime = require('mime-types');

function Mime(req, res, next){
    var pathObj = url.parse(req.url, true);
    var mimeType = mime.lookup(pathObj.pathname);
    console.log("mime:"+mimeType);

    res.setHeader('content-type', mimeType);
    next();
}

module.exports = Mime;