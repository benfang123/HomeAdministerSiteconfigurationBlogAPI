// 用户登录
exports.login=async (request,response,next)=>{
	try{
		// 处理请求
		response.send("post请求 /users/login");
	}catch(err){
		next(err);
	}
}
// 用户注册
exports.registration=async (request,response,next)=>{
	try{
		// 处理请求
		response.send("get /user");
	}catch(err){
		next(err);
	}
}
// Get Current User 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /user");
  } catch (err) {
    next(err);
  }
};
// 更新用户 
exports.updateUser=async (request,response,next)=>{
	try{
		// 处理请求
		response.send("put /user");
	}catch(err){
		next(err);
	}
}