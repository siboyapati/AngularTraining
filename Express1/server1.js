//Morgan: This is an HTTP request logger middleware.

//body-parser: This is a body-parsing middleware that is used to parse the request body, and it supports various request types.

//method-override: This is a middleware that provides HTTP verb support such as PUT or DELETE in places where the client doesn't support it.
//Compression: This is a compression middleware that is used to compress the response data using gzip/deflate
//express.static: This middleware used to serve static files
//cookie-parser: This is a cookie-parsing middleware that populates the req.cookies object.
//Session: This is a session middleware used to support persistent sessions.


//Windows set the environment variables
//set NODE_ENV=development

//In the unix set the environment variable to
// export NODE_ENV=development


var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');


var app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.set('views','./app/views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/', function (req, res) {
    res.send('hello world');
})

app.listen(3000, function () {
    console.log('server is listing on the port 3000');
})
