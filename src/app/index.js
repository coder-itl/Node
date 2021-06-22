const Koa = require('koa')
const bodyParse = require('koa-bodyparser')

const app = new Koa()

// 划分结构 导入
const userRouter = require('../router/user.router')

// 解析 json 格式数据
app.use(bodyParse())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods()) // 检测某个方法

module.exports = app
