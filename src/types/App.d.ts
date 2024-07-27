/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 23:33:17
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-27 15:22:38
 */
interface Card {
  /**
   * 名称
   */
  name: string;
  /**
   * 星级
   * 2 新生
   * 3 优异
   * 4 特出
   */
  rankType: number;
  /**
   * 类型
   */
  // itemType: string;
  /**
   * 卡池	
   */
  gachaName: string;
  /**
   * 卡池类型
   */
  gachaType: string
  /**
   * 时间
   */
  time: string;
}

interface DrawCardHistory {
  UID: string;
  /**
   * 卡池代号
   */
  Pool: string;
  /**
   * 卡池名称
   */
  PoolName: string;
  /**
   * 卡池类型
   */
  PoolType: string;
  /**
   * 角色代号
   */
  Card: string;
  /**
   * 角色名称
   */
  CardName: string;
  Time: number;
  /**
   * 星级
   * 2 新生
   * 3 优异
   * 4 特出
   */
  Rare: number;
}
