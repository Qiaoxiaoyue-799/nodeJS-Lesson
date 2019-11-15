var express = require('express');
var router = express.Router();
//引入数据库
var mysql = require("mysql");
var dbconfig=require("../config/dbconfig.json");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//会拼接/add，如果有两个/会自动舍弃一个
router.post("/add",function(req,res,next){
  // console.log(req.body.title);
  // console.log(req.body.content);
  var title=req.body.title;
  var content=req.body.content;
  //创建数据库的连接
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into chapters(title,content) values(?,?)",[title,content],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.end("insert success");
    }
  });
  //数组中变量会依次对应前面values里的?

})
router.get("/list",function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      // console.log(result);
      //显示到页面
      res.render("list",{chapterList:result});
    }
  });
})
router.get("/del",function(req,res,next){
  var chapterId=req.query.chapterId;//从list.ejs传来的参数chapterId
  var con=mysql.createConnection(dbconfig);
  con.connect();//完成数据库连接
  con.query("delete from chapters where chapterId=?",[chapterId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("delete success")
    }
  })
})

//update chapters set content=?where chapterId=?

module.exports = router;
