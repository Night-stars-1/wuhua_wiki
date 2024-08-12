/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-12 15:15:19
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 15:15:25
 */
import axios from "./http";


async function skill2icon(id: string) {
  const response = await axios.get(
    "skill/skill2icon.json"
  );
  return response.data[id]
}

export {
  skill2icon
}
