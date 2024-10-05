/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-01 14:43:02
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-10-05 17:48:15
 */
import axios from "axios";

class QRCodeLogin {
  ticket: string = "";

  async qrcodeLogin(): Promise<void> {
    const response = await axios.post(
      "https://whmx.srap.link/api/qrcode_login",
    );
    const ticket = response.data.data.ticket;

    this.ticket = ticket;
  }

  async checkQRCode(): Promise<{
    access_key: string
    uid: string
  } | undefined> {
    if (this.ticket) {
      const response = await axios.post(
        "https://whmx.srap.link/api/qrcode_check",
        {
          ticket: this.ticket,
        }
      );
  
      return response.data.data
    }
  }
}

export default QRCodeLogin;
