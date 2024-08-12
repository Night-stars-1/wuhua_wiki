/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-12 15:34:10
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 17:10:24
 */
import Axios from 'axios';
import { setupCache, buildWebStorage } from 'axios-cache-interceptor';

const instance = Axios.create();
// 似乎无效
const axios = setupCache(instance, {
  storage: buildWebStorage(localStorage, 'axios-cache:'),
  ttl: 1000 * 60 * 5,
});

export default axios
