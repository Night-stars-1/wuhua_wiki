/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-26 14:44:18
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-26 16:38:26
 */
import axios from "axios";
import { JSEncrypt } from "jsencrypt";

class Auth {
  private passwordHash: string = "";
  private cipherKey: string = "";

  async signPassword(password: string): Promise<string> {
    await this.loadCipher();
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(this.cipherKey);
    const signed = encrypt.encrypt(this.passwordHash + password);
    if (!signed) {
      throw new Error("Password encryption failed");
    }
    return signed;
  }

  private async loadCipher(): Promise<void> {
    const response = await axios.post(
      "https://goda.srap.link/getBiliGameCipher"
    );
    const data = response.data.data;

    this.cipherKey = data.cipher_key;
    this.passwordHash = data.hash;
  }

  async getAccessKey(user_id: string, pwd: string): Promise<{
    access_key: string
    uid: string
  }> {
    const response = await axios.post(
      "https://goda.srap.link/getWuHuaAccessKey",
      {
        user_id,
        pwd,
      }
    );

    return response.data.data
  }
}

export default Auth;
