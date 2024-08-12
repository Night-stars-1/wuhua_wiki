/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-11 23:47:35
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 20:18:50
 */
interface CharSkill {
  id: string;
  level: number;
  locking: boolean;
}

interface CharWeaponAdditional {
  id: string;
  level: number;
}

interface CharWeapon {
  id: string;
  level: number;
  star: number;
  additional: CharWeaponAdditional[];
}

interface CharStyle {
  id: number;
  points: number[];
}

interface CharInfoData {
  level: number;
  skills: CharSkill[];
  weapon: CharWeapon;
  style: CharStyle
}

interface WeaponData {
  name: string;
  rare: number
}

interface WeaponAdditionalAttrsData {
  init: number;
  grow: number;
}
interface WeaponAdditionalData {
  name: string;
  type: string;
  attrs: {[key: string]: WeaponAdditionalAttrsData}
}
