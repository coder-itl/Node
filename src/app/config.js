// 加载 dotenv
const dotenv = require('dotenv')

// 调用
dotenv.config()

// 导出配置
module.exports = { APP_PORT } = process.env
