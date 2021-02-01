/*
 * @Description: 
 * @Date: 2020-11-26 10:41:33
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
import { Context } from 'koa'
import { getManager } from 'typeorm'
import { User } from './../entity/user'


const UserController = {
    // 注册
    async register(ctx: Context) {
        const { username, password, age } = ctx.request.body
        console.log('age: ', age);
        console.log('password: ', password);
        console.log('username: ', username);

        const userRepository = getManager().getRepository(User)
        const user = await userRepository.create({
          username,
          password,
          age
        })
        await userRepository.save(user)
        ctx.body = { message: '注册成功' }
    },
}

export default UserController
