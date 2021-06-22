// 加载 dotenv
const dotenv = require('dotenv')

// 调用
dotenv.config()

// 导出配置
module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env
