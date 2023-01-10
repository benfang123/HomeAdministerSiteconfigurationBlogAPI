const express=require("express");
const router =express.Router();

router.get('/tags',(request,response,next)=>{
	try{
		response.send('get /tags');
	}catch(err){
		next(err);
	}
})

module.exports=router;
