const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.post('/urlencoded', function(req, res){
    console.log(req.body);
    res.send(" post successfully!");
});
app.listen(3000);

// 数据格式 application/json
app.use(bodyParser.json());

// 数据格式 form-data
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
app.post('/formdata',multipartMiddleware, function (req, res) {
    console.log(req.body);
    res.send("post successfully!");
});


// 数据格式 text/xml
express = require('express');
const xml2json = require('xml2json');
app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/xml', function (req, res) {
    req.rawBody = '';//添加接收变量
    var json={};
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        req.rawBody += chunk;
    });
    req.on('end', function() {
        json=xml2json.toJson(req.rawBody);
        res.send(JSON.stringify(json));
    });
});
app.listen(3000);
