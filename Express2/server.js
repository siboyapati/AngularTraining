var express = require('express');
var app = express();

var mongoose = require('mongoose');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));



var url = 'mongodb://tom:tom@ds031922.mlab.com:31922/fill';
mongoose.connect(url);

var Schema = mongoose.Schema;

var BioData = new Schema({
    name: String,
    age: String
});

var Bio = mongoose.model('Bio', BioData);


router.get('/', function (req, res) {
    Bio.find(function (err, books) {
        if (err) {
            res.send(err);
        } else {
            res.json(books);
        }
    });
});

router.post('/', function (req, res) {
    var bio = new Bio();
    bio.name = req.body.name;
    bio.age = req.body.age;
    bio.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Bio created!'});
    });
});


app.use('/api', router);

app.listen(3000, function () {
    console.log('application is listing on the port 3000');
});
