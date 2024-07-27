/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-27 16:51:42
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-27 17:00:32
 */
import type { ComponentInternalInstance } from "vue";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const http = appContext.config.globalProperties.$http;

async function getWuhuaKey(
  code: string,
  uid: string,
): Promise<string> {
  const response = await http.post(
    "https://goda.srap.link/getWuHuaKey",
    {
      code: code,
      uid: uid
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

async function getDrawCardHistory(
  key: string = "",
  code: string = "",
  uid: string = "",
  page: number = 0
): Promise<DrawCardHistory[]> {
  const response = await http.post(
    "https://goda.srap.link/getDrawCardHistory",
    {
      code,
      uid,
      key,
      type: ["time", "oldtime", "newPlayer", "normal"],
      page,
      pagesize: 10,
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

export {
  getWuhuaKey,
  getDrawCardHistory
}
