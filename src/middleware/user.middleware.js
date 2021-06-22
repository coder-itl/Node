// middleware 中间件封装
const errorTypes = require('../constants/error-types')

/**
 *  用户名和密码不能为空的中间件验证
 *
 */

const verifyUser = async (ctx, next) => {
  // 1. 获取用户名和密码
  const { name, password } = ctx.request.body
  // 2. 判断用户名或者密码不能位空
  if (!name || !password || name === '' || password === '') {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 
  // await next()
}
module.exports = {
  verifyUser,
}
