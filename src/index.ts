/*
 * @Description: 
 * @Date: 2020-11-26 10:15:11
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */


 import Koa from 'koa'
 import Router from 'koa-router'
 import cors from 'koa-cors'
 import bodyParser from 'koa-bodyParser'
 import { createConnection } from 'typeorm'

 import { AppRoutes } from './routers'

 createConnection()
 .then(() => {
   const app = new Koa()
   const router = new Router()
   AppRoutes.forEach(route => router[route.method](route.path, route.action))

   app.use(cors())
      .use(bodyParser())
      .use(router.routes())
      .use(router.allowedMethods())
   app.listen(3000)
 })
 .catch(err => console.log('TypeOrm 链接失败', err))