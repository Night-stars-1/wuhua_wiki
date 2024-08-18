/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-11 23:47:35
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-18 15:50:50
 */
type CharSkill = {
  id: string;
  level: number;
  locking: boolean;
}

type CharWeaponAdditional = {
  id: string;
  level: number;
}

type CharWeapon = {
  id: string;
  level: number;
  star: number;
  additional: CharWeaponAdditional[];
}

type CharStyle = {
  id: number;
  points: number[];
}

type CharInfoData = {
  level: number;
  skills: CharSkill[];
  weapon: CharWeapon;
  style: CharStyle
}

type WeaponData = {
  name: string;
  rare: number
}

type WeaponAdditionalAttrsData = {
  init: number;
  grow: number;
}

type WeaponAdditionalData = {
  name: string;
  type: string;
  attrs: {[key: string]: WeaponAdditionalAttrsData}
}

type StyleData = {
  name: string,
  sector: string[]
}
