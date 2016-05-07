/**
 * Created by t_boyas on 5/7/16.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/productslist', function (req, res) {
    res.send('building products list.');
});

app.get('/itemslist', function (req, res) {
    res.send('building items list.');
});


app.listen(3003, function () {
    console.log('Example app listening on port 3003!');
});