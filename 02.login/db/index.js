var mongoose = require('mongoose');//引入模块
var url = 'mongodb://localhost:27017/login';
mongoose.connect(url);//链接数据库
//获取文件句柄
var db = mongoose.connection;
//获取文件的错误信息
db.on('error',() =>{
  console.log('Connect error');
});
//打开数据库成功
db.open('open', () =>{
  console.log('mongoose working!!!');
});

var sj = new Date(Date.now() + (8 * 60 * 60 * 1000));//获取当前的时间

//创建集合的文档类型
var Schema = mongoose.Schema;
//用户信息
var userSchema = new Schema({
  name : { type : String}, //姓名
  password : { type : String}, //密码
  sex : { type : String}, //性别
  age : {type : Number},//年龄
  email : { type : String, default : ''}, //邮箱
  user_time : { type :String } //出生日期
});



//链接集合
var User = mongoose.model('User',userSchema);
//创建一个用户信息user模块
module.exports.user = User;
