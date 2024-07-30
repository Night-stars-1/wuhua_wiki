/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-26 14:24:43
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-30 20:06:43
 */
import { isEqual } from 'lodash';
// /**
//  * 查找重叠索引
//  * @param data1
//  * @param data2
//  */
// function findOverlapIndexOld(data1: Card[], data2: Card[]) {
//   for (let i = 0; i < data1.length; i++) {
//     let overlap = true;
//     for (let j = 0; j < data2.length && i + j < data1.length; j++) {
//       if (
//         data1[i + j].name !== data2[j].name ||
//         data1[i + j].rankType !== data2[j].rankType ||
//         data1[i + j].gachaName !== data2[j].gachaName ||
//         data1[i + j].gachaType !== data2[j].gachaType ||
//         data1[i + j].time !== data2[j].time
//       ) {
//         overlap = false;
//         break;
//       }
//     }
//     if (data2.length == 0) {
//       return -1;
//     }
//     if (overlap) {
//       return i;
//     }
//   }
//   return -1;
// }

/**
 * 根据索引元素和检验元素查找重叠索引\
 * 当索引元素匹配后会根据`检验元素是否与目标列表的索引后一个元素是否相等`来判断是否重叠
 * @param targetList 目标列表
 * @param sourceItem 索引元素
 * @param checkItem 检验元素
 * @returns 重叠索引
 */
function findOverlapIndex(targetList: Card[], sourceItem: Card, checkItem: Card) {
    const indices = targetList.reduce<number[]>((acc, item, index) => {
        if (isEqual(item, sourceItem)) {
          acc.push(index);
        }
        return acc;
    }, []);
    for (let i = 0; i < indices.length; i++) {
        const index = indices[i]
        if (isEqual(targetList[index+1], checkItem)) {
            return index
        }
    }
    return -1
}

/**
 * 合并列表\
 * 会根据来源列表的前两位元素来判断是否重叠\
 * 如果重叠则切割目标列表再合并，否则直接合并
 * @param targetList 目标列表
 * @param sourceList 来源列表
 */
function mergeLists(targetList: Card[], sourceList: Card[]) {
  const overlapIndex = findOverlapIndex(targetList, sourceList[0], sourceList[1]);
  if (overlapIndex !== -1) {
    return targetList.slice(0, overlapIndex).concat(sourceList);
  }
  return targetList.concat(sourceList);
}

export {
  mergeLists,
}
