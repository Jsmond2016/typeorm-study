/*
 * @Description: 
 * @Date: 2020-11-26 10:11:18
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

 module.exports = {
   type: 'mysql', // 数据库类型
   host: 'localhost', // 链接域名
   port: 3306, // 链接端口
   username: 'root', // 用户名
   password: 'root', // 用户密码
   database: 'userlist', // 数据库名
   logging: false, // 是否有日志
   synchronize: true, // 是否自动建表
   entities: ['src/entity/*{.ts, .js}'], //entity/model 存放位置
   timezone: 'Z', // 以本地时区时间为主
   dateStrings: 'TIMESTAMP'
 }