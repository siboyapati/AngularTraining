/**
 * Created by sboyapati on 2/06/16.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BooksSchema   = new Schema({
    title: String,
    author:String,
    isbn10:String,
    publicationyear:String,
    rating:Number,
    price:Number,
    quantity:Number

});

module.exports = mongoose.model('Book', BooksSchema);