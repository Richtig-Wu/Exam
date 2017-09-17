var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');
var socket = require('../socket');

router.get('/', function(req , res){
  db.user.find({},function(err,doc){
    assert.equal(err,null);
        res.render('show',{title:'个人信息列表',infos:doc});
  });
});


router.post('/',function(req,res){
  //删除
  db.user.deleteOne({"_id": req.body.id},function(err,doc){
    console.log(req.body);
  res.render('show',{dele:'删除'});
  assert.equal(err,null);

  res.redirect('/show');
  });

});

module.exports = router;
