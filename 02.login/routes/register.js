var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
// var socket = require('../socket');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register',rem:'' });
});

router.post('/', function(req, res, next){
  console.log(req.body.name);
  var user = new db.user(req.body);
  // console.log("user");
  db.user.findOne({email: req.body.email}, function(err, doc){
    if(doc){
      res.render('register', { title:'个人信息注册',rem: '账号已存在' });
    }else{
      user.save(function(err, resulte){
        assert.equal(err, null);
        // socket.io.emit('msg', resulte);
        res.redirect('login');
      });

    }
  });
})

module.exports = router;
