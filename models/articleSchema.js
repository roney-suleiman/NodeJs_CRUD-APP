const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining the Schema
const articleSchema = new Schema({
    title: String,
    summary: String,
    body: String
});

//create the model
const Article = mongoose.model("Article", articleSchema);

//export the model
module.exports = Article;