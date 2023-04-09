

const Article = require('../models/articleSchema');

const article_post = (req, res) => {
    const article = new Article(req.body);

    article
    .save()
    .then(result => {
         res.redirect('/all-articles');
         console.log(result); 
        })
    .catch(err => {console.log(err);})
}



const article_ditails_get = (req, res) => {

    Article.findById(req.params.id)
    .then(result => {
        res.render('details', {myTitle: 'Deatils', objArticle: result});
    })
    .catch(err => {
        console.log(err);
    })
}


const article_index_get = (req, res) => {
    Article.find()
    .then(result => {
         res.render('index', {myTitle: 'Home', arrArticles: result});
         })
    .catch(err => {
        console.log(err);
    })
}


const article_delete= (req, res) => {
    Article.findByIdAndDelete(req.params.id)
    .then((params) => {res.json({myLink: "/all-articles"})})
    .catch((err) => {console.log(err);})
}


module.exports = {
    article_post,
    article_ditails_get,
    article_index_get,
    article_delete
}