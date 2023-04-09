const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
const allArticleRouter = require('./routes/all-articles');
const helmet = require('helmet');

// auto refresh codes...........
            const path = require("path");
            const livereload = require("livereload");
            const liveReloadServer = livereload.createServer();
            liveReloadServer.watch(path.join(__dirname, 'public'));
            
            const connectLivereload = require("connect-livereload");
            app.use(connectLivereload());
            
            liveReloadServer.server.once("connection", () => {
            setTimeout(() => {
                liveReloadServer.refresh("/");
            }, 100);
            });
//.....................


//Mongoose..........
    const mongoose = require('mongoose');
    mongoose.connect("mongodb+srv://ronney:r092491739@cluster0.lsa18dl.mongodb.net/all-data?retryWrites=true&w=majority")
    .then(result => { 
        app.listen(proccess.evn.PORT || port, () => {
            console.log(`it play on: http://localhost:${port}` );
        })  
    })
    .catch(err => {
        console.log(err);
    })
//........


app.use(helmet());

app.get('/', (erq, res) => {
    // res.send('Ron Sul , Roney Suleiman');
    res.redirect('/all-articles');
});

app.get("/new-article", (req, res) => {
    res.render('new-article', {myTitle: 'New Article'});
});

// all-articles route
app.use('/all-articles', allArticleRouter);


app.use((req, res) => {
    res.status(404).send('Page Not Found');
})


