/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-27 16:51:42
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-09-26 13:02:34
 */

import { axios } from "@/plugin/axios";

async function getWuhuaKey(code: string, uid: string): Promise<string> {
  const response = await axios.post(
    "https://whmx.srap.link/api/login",
    {
      code: code,
      uid: uid,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data.key;
}

async function getDrawCardHistory(
  key: string = "",
  code: string = "",
  uid: string = "",
  page: number = 0
): Promise<DrawCardHistory[]> {
  const response = await axios.post(
    "https://whmx.srap.link/api/draw_card_history",
    {
      code,
      uid,
      key,
      poolType: ["time", "oldtime", "newPlayer", "normal"],
      page,
      pageSize: 10,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      validateStatus: status => status >= 200 && status < 300 || status === 401
    }
  );
  return response.data.data || [];
}

async function getCharacterData(
  code: string,
  uid: string
): Promise<{
  data: {
    [key: string]: CharInfoData;
  };
  message: string;
  status: boolean;
}> {
  const response = await axios.post(
    "https://whmx.srap.link/api/character_data",
    {
      code,
      uid,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

async function reward(
  code: string,
  uid: string,
  rewardCode: string
): Promise<string> {
  const response = await axios.post(
    "https://whmx.srap.link/api/reward",
    {
      code,
      uid,
      reward_code: rewardCode,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data;
}

export { getWuhuaKey, getDrawCardHistory, getCharacterData, reward };
