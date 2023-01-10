const express=require('express');
const router=express.Router();
/**
 * 中间件区域
 */
// 获取最近文章列表
router.get('/',async(request,response,next)=>{
	try{
		response.send("get /api/articles")
	}catch(err){
		next(err);
	}
})
// 获取订阅源(Feed)，还获取列表文章等参数
router.get('/feed',async(request,response,next)=>{
	try{
		response.send("get /api/articles/feed")
	}catch(err){
		next(err);
	}
})
// 获取文章（单篇）
router.get('/:slug',async(request,response,next)=>{
	try{
		response.send("get /api/articles/:slug")
	}catch(err){
		next(err);
	}
})
//创建文章
router.post('/',async(request,response,next)=>{
	try{
		response.send("post /api/articles")
	}catch(err){
		next(err);
	}
})
// 更新文章
router.put('/:slug',async(request,response,next)=>{
	try{
		response.send("put /api/articles/:slug")
	}catch(err){
		next(err);
	}
})
// 删除文章
router.delete('/:slug',async(request,response,next)=>{
	try{
		response.send("deletc /api/articles/:slug")
	}catch(err){
		next(err);
	}
})
// 给文章添加评论
router.post('/:slug/comments',async(request,response,next)=>{
	try{
		response.send("post /api/articles/:slug/comments")
	}catch(err){
		next(err);
	}
})
// 从文章中获取评论
router.get('/:slug/comments',async(request,response,next)=>{
	try{
		response.send("get /api/articles/:slug/comments")
	}catch(err){
		next(err);
	}
})
// 删除评论
router.delete('/:slug/comments/:id',async(request,response,next)=>{
	try{
		response.send("delete /api/articles/:slug/comments")
	}catch(err){
		next(err);
	}
})
// 喜欢文章
router.post('/:slug/favorite',async(request,response,next)=>{
	try{
		response.send("post /api/articles/favorite")
	}catch(err){
		next(err);
	}
})
// 取消喜欢
router.delete('/:slug/favorite',async(request,response,next)=>{
	try{
		response.send("delete /api/articles/favorite")
	}catch(err){
		next(err);
	}
})

module.exports=router;