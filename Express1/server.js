/**
 * Created by t_boyas on 5/6/16.
 */

var express = require('express');
var app = express();

app.use('/', function (req, res) {
    res.send('hello world');
})

app.listen(3000, function () {
    console.log('server is listing on the port 3000');
})

module.exports = app;

exports.render = function(req, res) {
    res.render('index', {
        title: 'Hello Worldddd'
    })
};