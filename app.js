// 0. 加载 Express
const express = require("express");
const morgan = require("morgan");//日志插件
const cors =require('cors')
const router=require('./router')

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());
app.use('/api',router)

// 端口号
const PORT=process.env.PORT || 8080



// 3. 监听端口号，启动 Web 服务
app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));