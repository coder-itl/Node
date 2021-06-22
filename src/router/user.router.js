const Router = require('koa-router')

// 创建路由 并配置前缀 post: 127.0.0.1：4092/users
const userRouter = new Router({ prefix: '/users' })

const { create } = require('../controller/user.controller')
const { verifyUser } = require('../middleware/user.middleware')

// create 封装出去
userRouter.post('/', verifyUser, create)

module.exports = userRouter
