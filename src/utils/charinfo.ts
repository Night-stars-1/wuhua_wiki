/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-12 14:31:29
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 16:32:42
 */
import axios from "./http";

async function getWeaponData(id: string) {
  const response = await axios.get(
    "charinfo/weapon.json"
  );
  return response.data[id]
}

async function getAdditionalData(id: string) {
  const response = await axios.get(
    `additionals/${id}.json`
  );
  return response.data
}

async function id2name(id: string) {
  const response = await axios.get(
    "charinfo/id2name.json"
  );
  return response.data[id]
}

export {
  getWeaponData,
  getAdditionalData,
  id2name
}
