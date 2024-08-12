/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-02-26 01:19:46
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-27 18:03:50
 */

import { DirectiveBinding } from 'vue';
import type { AxiosInstance } from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: AxiosInstance;
  }
}
