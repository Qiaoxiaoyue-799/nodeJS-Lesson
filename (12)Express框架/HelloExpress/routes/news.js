var express = require('express');
var router = express.Router();
//http://localhost:3000/news
router.get('/',function(req,res,next){
    res.end("news");
})
//http://localhost:3000/news/news
router.get('/news',function(req,res,next){
    res.end("this is news");
})

module.exports = router;