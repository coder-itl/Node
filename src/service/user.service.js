class UserService {
  async create(user) {
    console.log('将用户数据存储到数据库中:', user)
    return '创建用户成功'
  }
}

module.exports = new UserService()
