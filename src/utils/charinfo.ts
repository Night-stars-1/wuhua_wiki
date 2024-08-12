/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-12 14:31:29
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 20:44:21
 */
import axios from "./http";

async function getWeaponData(id: string): Promise<{ [key: string]: WeaponData; }> {
  const response = await axios.get(
    "charinfo/weapon.json"
  );
  return response.data[id]
}

async function getAdditionalData(id: string): Promise<WeaponAdditionalData> {
  const response = await axios.get(
    `additionals/${id}.json`
  );
  return response.data
}

async function id2name(id: string): Promise<{ [key: string]: string; }> {
  const response = await axios.get(
    "charinfo/id2name.json"
  );
  return response.data[id]
}

async function getStyleData(id: number): Promise<StyleData> {
  const response = await axios.get(
    "charinfo/style.json"
  );
  return response.data[id]
}

export {
  getWeaponData,
  getAdditionalData,
  id2name,
  getStyleData
}
