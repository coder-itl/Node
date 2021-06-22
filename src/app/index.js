const Koa = require('koa')
const bodyParse = require('koa-bodyparser')

const app = new Koa()

// 划分结构 导入
const userRouter = require('../router/user.router')
const errorHandler = require('./error-handle')

// 解析 json 格式数据
app.use(bodyParse())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods()) // 检测某个方法

// 错误处理函数 监听
app.on('error', errorHandler)

module.exports = app
