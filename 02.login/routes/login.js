var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login',name_err:'',password_err:'' });
});

router.post('/',function(req,res){
  // console.log(req.body.name);
  db.user.findOne({email:req.body.email},function(err,doc){
    console.log(doc);
    if(doc !== null){
      console.log("ok");
      if(doc.password === req.body.password){
        db.user.findOne({},function(er,info){
          assert.equal(er,null);
          res.redirect('/show');
        });
      }else{
        res.render('login', { title: 'Login',name_err:'',password_err:'密码错误' });
      }
    }else {
      res.render('login', { title: 'Login',name_err:'用户名不存在!请注册',password_err:'' });
    }
  })
});


module.exports = router;
