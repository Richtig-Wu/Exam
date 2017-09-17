var express = require('express');
var router = express.Router();
var assert =require('assert');
var db = require('../db');

router.get('/', function(req, res) {
//功能：查找到想要修改的数据ID
  var boy ='';
  var girl = '';
  db.user.findOne({"_id":req.query.id},function(err,doc){
    assert.equal(err,null);
  console.log("A",req.query.id);
    // console.log(doc);
    if(doc.sex == "男"){
        boy = "checked";
        girl = "";
    }else if(doc.sex == "女"){
        boy = "";
        girl = "checked";
    }
    res.render('update', { title: '修改个人信息' , docs: doc , boy:boy , girl:girl});
  });
});

router.post('/',function(req,res){
  // console.log(req.body.id);
  db.user.update({"_id":req.body.id},{$set:req.body},function(err,docs){
    assert.equal(err,null);
  res.redirect('/show');

  });
});
module.exports = router;
