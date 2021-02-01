/*
 * @Description: 
 * @Date: 2020-11-26 10:18:06
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

import {
  UserController,
} from './../controller/index'

export interface RouteItem {
  path: string
  method: 'get' | 'post' | 'put' | 'delete'
  action: any
}

export const AppRoutes: RouteItem[] = [
  {
      path: '/api/register',
      method: 'post',
      action: UserController.register
  },
]