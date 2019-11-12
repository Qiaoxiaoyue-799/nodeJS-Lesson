var express = require('express');
var router = express.Router();
var data = require('../data.json');//引入数据
/* GET home page. */
router.get('/', function(req, res, next) {
  // var img = req.query.left;
  // var userName = req.query.username;
  // var userPwd = req.query.pwd;
  // console.log(userPwd);
  res.render('login', { title: 'Express' });
});
router.post('/list',function(req,res,next) {
  if(req.body.username == data.users[0].username && req.body.pwd == data.users[0].password) {
    res.render('list',{data});
  }
  else {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end('用户名密码错误');
  }
})

module.exports = router;
