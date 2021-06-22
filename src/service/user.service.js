const connection = require('../app/database')

class UserService {
  async create(user) {
    const { name, password } = user
    // sql 的插入语句
    const statement = `INSERT INTO users ( NAME, PASSWORD ) VALUES	(?,?);`

    const result = await connection.execute(statement, [name, password])
    // 将 user 存储到数据库中
    return result
  }
}

module.exports = new UserService()
