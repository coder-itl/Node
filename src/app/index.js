const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

// 创建路由 并配置前缀 post: 127.0.0.1：4092/users
const userRouter = new Router({ prefix: '/users' })

userRouter.post('/', (ctx, next) => {
  // 浏览器返回
  ctx.body = '创建用户成功'
})

userRouter.get('/', (ctx, next) => {
  ctx.body = '<h1>登录</h1>'
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods()) // 检测某个方法

module.exports = app
