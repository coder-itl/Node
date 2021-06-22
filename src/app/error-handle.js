const errorTypes = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message

  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // bad request
      message = '用户名或密码不能为空'
      break
    default:
      status = 404
      message = 'NOT FOUND'
  }
  ctx.status = 404
  ctx.body = '发生错误了'
}

module.exports = errorHandler
