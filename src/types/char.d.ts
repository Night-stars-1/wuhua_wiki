/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 23:08:00
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-11 14:09:05
 */
interface CharInfo {
  /**
   * 角色名称
   */
  name: string;
  /**
   * 生命值
   */
  Hp: number;
  /**
   * 攻击力
   */
  Atk: number;
  /**
   * 物理防御
   */
  PhysicDef: number;
  /**
   * 构术防御
   */
  MagicDef: number;
  /**
   * 速度
   */
  Speed: number;
  /**
   * 移动力
   */
  Mov: number;
  /**
   * 命中率
   */
  HitRate: number;
  /**
   * 闪避率
   */
  MissRate: number;
  /**
   * 暴击率
   */
  Critical: number;
  /**
   * 暴击伤害
   */
  CritDmg: number;
  /**
   * 暴击抗性
   */
  CritRes: number;
  /**
   * 暴击伤害抗性
   */
  CritDmgRes: number;
  /**
   * 格挡穿透
   */
  BlockPenetrate: number;
  /**
   * 能量上限
   */
  EnergyLimit: number;
  /**
   * 生命值成长
   */
  Hp_GROW: number;
  /**
   * 攻击成长
   */
  Atk_GROW: number;
  /**
   * 物理防御成长
   */
  PhysicDef_GROW: number;
  /**
   * 构术防御成长
   */
  MagicDef_GROW: number;
  /**
   * 速度成长
   */
  Speed_GROW: number;
  /**
   * 命中率成长
   */
  HitRate_GROW: number;
  /**
   * 闪避率成长
   */
  MissRate_GROW: number;
  /**
   * 暴击率成长
   */
  Critical_GROW: number;
  /**
   * 暴击伤害成长
   */
  CritDmg_GROW: number;
  /**
   * 暴击抗性成长
   */
  CritRes_GROW: number;
  /**
   * 暴击伤害抗性成长
   */
  CritDmgRes_GROW: number;
  /**
   * 格挡穿透成长
   */
  BlockPenetrate_GROW: number;
  /**
   * 能量上限成长
   */
  EnergyLimit_GROW: number;
  /**
   * 稀有度
   */
  rare: number
  /**
   * 职业
   */
  job: number
  /**
   * 标签
   */
  tag: string
}

interface Buff {
  /**
   * Buff名称
   */
  name: string;
  /**
   * 注释
   */
  des: string;
}

interface SkillInfo {
  /**
   * 技能名称
   */
  name: string;
  /**
   * 注释
   */
  des: string;
  /**
   * 标签
   */
  tag: (string | null)[];
  /**
   * 图标名称
   */
  icon: string;
  /**
   * buff
   */
  buff: Buff[];
  /**
   * 类型
   * 1 主动
   * 2 被动
   */
  type: number
}

interface CharData {
  id: string;
  name: string;
}

interface SkinInfo {
  id: string;
  name: string;
}

interface Char {
  info?: CharInfo;
  skill?: SkillInfo[];
  skin?: SkinInfo[];
}
