const express=require('express');
const router=express.Router();
// 获取指定用户资料
router.get('/:username',async (request,response,next)=>{
	try{
		// 处理请求
		response.send("get请求 /:username");
	}catch(err){
		next(err);
	}
})
// 关注用户
router.post('/:username/follow',async (request,response,next)=>{
	try{
		// 处理请求
		response.send("pos请求 /:username/follow");
	}catch(err){
		next(err);
	}
})
// 取消关注
router.delete('/:username/follow',async (request,response,next)=>{
	try{
		// 处理请求
		response.send("get请求 /:username/follow");
	}catch(err){
		next(err);
	}
})
module.exports=router;