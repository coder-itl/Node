# Node

###  Node 版本管理工具

+ `Node`官方文档

  ```bash
  https://nodejs.org/dist/latest-v16.x/docs/api/
  ```

+ `windows`管理工具下载

  ```bash
  https://github.com/coreybutler/nvm-windows/releases
  ```

+ 检测

  ```bash
  nvm 
  ```

+ 基础命令使用

  ```bash
  # 检测已安装 node 版本
  nvm  list
  
  
  # 显示所有可用版本
  > nvm list available
  
  |   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
  |--------------|--------------|--------------|--------------|
  |    16.3.0    |   14.17.1    |   0.12.18    |   0.11.16    |
  |    16.2.0    |   14.17.0    |   0.12.17    |   0.11.15    |
  |    16.1.0    |   14.16.1    |   0.12.16    |   0.11.14    |
  |    16.0.0    |   14.16.0    |   0.12.15    |   0.11.13    |
  |   15.14.0    |   14.15.5    |   0.12.14    |   0.11.12    |
  |   15.13.0    |   14.15.4    |   0.12.13    |   0.11.11    |
  |   15.12.0    |   14.15.3    |   0.12.12    |   0.11.10    |
  |   15.11.0    |   14.15.2    |   0.12.11    |    0.11.9    |
  |   15.10.0    |   14.15.1    |   0.12.10    |    0.11.8    |
  |    15.9.0    |   14.15.0    |    0.12.9    |    0.11.7    |
  |    15.8.0    |   12.22.1    |    0.12.8    |    0.11.6    |
  |    15.7.0    |   12.22.0    |    0.12.7    |    0.11.5    |
  |    15.6.0    |   12.21.0    |    0.12.6    |    0.11.4    |
  |    15.5.1    |   12.20.2    |    0.12.5    |    0.11.3    |
  |    15.5.0    |   12.20.1    |    0.12.4    |    0.11.2    |
  |    15.4.0    |   12.20.0    |    0.12.3    |    0.11.1    |
  |    15.3.0    |   12.19.1    |    0.12.2    |    0.11.0    |
  |    15.2.1    |   12.19.0    |    0.12.1    |    0.9.12    |
  |    15.2.0    |   12.18.4    |    0.12.0    |    0.9.11    |
  |    15.1.0    |   12.18.3    |   0.10.48    |    0.9.10    |
  
  This is a partial list. For a complete list, visit https://nodejs.org/download/release
  
  ```

+ 安装`node`

  ```bash
  # 安装
  nvm install latest[安装最新] | nvm install  16.3.0  【指定版本号安装】
  
  ```

  ![nvm.png](https://i.loli.net/2021/06/18/TCa1xphQgn7UEsw.png)

+ `nvm`镜像配置

  ```bash
  npm config set registry https://registry.npm.taobao.org
  ```

+ 版本之间的切换

  ```bash
  # 切换
  npm use 版本号
  
  # 查看是否切换
  nvm list
  ```

  ![nvm-use.png](https://i.loli.net/2021/06/18/lmvsidgThWF2Z5c.png)



+ 卸载指定版本

  ```bash
  nvm uninstall 版本号
  ```

  

+ 注意检测原先的`bash`使用`node`命令

  + 有问题配置`nvm`环境变量

    ```bash
    NVM_HOME: D:\nvm\
    NVM_SYMLINK: C:\Program Files\nodejs [安装 nvm 时注意文件位置]
    ```

    



### Node-Proj

- 目录结构划分

  ```javascript
      app
      controller // 控制层
      router // 路由
      service // 数据库
      utils // 工具类
  
      ../main.js // 入口文件
  ```

+ 文档

  ```bash
  env: https://www.npmjs.com/package/dotenv 作用: 读取根目录下的 .env 文件
  ```

+ 测试工具`postman`基本使用

  ![postman.gif](https://i.loli.net/2021/06/21/nMl4Sk8LOFQv1CB.gif)

+ `mysql2`

  ```sql
  CREATE TABLE
  IF
  	NOT EXISTS users (
  		id INT PRIMARY KEY auto_increment,
  		NAME VARCHAR ( 20 ) NOT NULL UNIQUE,
  		PASSWORD VARCHAR ( 50 ) NOT NULL,
  	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updateAtr TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
  ```

  