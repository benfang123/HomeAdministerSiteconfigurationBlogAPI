const express=require('express');
const router=express.Router();
const userCtrl = require("../controller/user");
/**
 * async表示异步的意思，如果前面加上 async =false 就表示同步的方式运行，当程序读到这句话的要等到它运行完毕之后才执行下面的程序。
 * 而如果是 async =true ; 就表示异步的方式运行，不用等到当前语句返回结果就会继续下面的语句。这样运行更流畅，不会出现停顿的现象。
 */

// 注册用户
router.post('/users/login',userCtrl.login)
// 登录用户
router.get('/user',userCtrl.registration)
// 获取当前登录用户
router.get("/user", userCtrl.getCurrentUser);
// 更新用户 （用户修改个人信息）
router.put('/user',userCtrl.updateUser);

module.exports=router;