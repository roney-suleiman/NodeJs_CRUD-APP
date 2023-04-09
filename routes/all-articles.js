const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');
//post request frome users input that saved in Schema , then hier save it as document in our collection in database
router.post("/", articleController.article_post);

router.get("/:id", articleController.article_ditails_get);

//get request for all document in our collection in database
router.get("/", articleController.article_index_get)

//Delete request
router.delete('/:id', articleController.article_delete);

module.exports = router;