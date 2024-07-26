/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-26 14:24:43
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-26 14:28:49
 */
/**
 * 查找重叠索引
 * @param data1
 * @param data2
 */
function findOverlapIndex(data1: Card[], data2: Card[]) {
  for (let i = 0; i < data1.length; i++) {
    let overlap = true;
    for (let j = 0; j < data2.length && i + j < data1.length; j++) {
      if (
        data1[i + j].name !== data2[j].name ||
        data1[i + j].rankType !== data2[j].rankType ||
        data1[i + j].gachaName !== data2[j].gachaName ||
        data1[i + j].gachaType !== data2[j].gachaType ||
        data1[i + j].time !== data2[j].time
      ) {
        overlap = false;
        break;
      }
    }
    if (data2.length == 0) {
      return -1;
    }
    if (overlap) {
      return i;
    }
  }
  return -1;
}

/**
 * 合并列表
 */
function mergeLists(data1: Card[], data2: Card[]) {
  const overlapIndex = findOverlapIndex(data1, data2);
  if (overlapIndex !== -1) {
    return data1.slice(0, overlapIndex).concat(data2);
  }
  return data1.concat(data2);
}

export {
  mergeLists,
}
