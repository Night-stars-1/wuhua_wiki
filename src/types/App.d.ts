interface Card {
  /**
   * 名称
   */
  name: str;
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
  // itemType: str;
  /**
   * 卡池	
   */
  gachaName: str;
  /**
   * 卡池类型
   */
  gachaType: str
  /**
   * 时间
   */
  time: str;
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
