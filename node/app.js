/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-09-09 21:05:09 
 * @Last Modified by:   伟龙-Willon 
 * @Last Modified time: 2018-09-09 21:05:09 
 */

var express = require('express');
var app = express();

var data = {name:'willon'};

app.get('/jsonp',function(req,res,next){
    var cb = req.query.cb;
    console.log('回调函数的名称-->'+cb+'\n');
    res.send(cb+'('+JSON.stringify(data)+')');
});

app.listen(3001);