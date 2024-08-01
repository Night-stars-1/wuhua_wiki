import axios from "axios";

class QRCodeLogin {
  ticket: string = "";

  async qrcodeLogin(): Promise<void> {
    const response = await axios.post(
      "https://goda.srap.link/qrcode_login"
    );
    const ticket = response.data.data;

    this.ticket = ticket;
  }

  async checkQRCode(): Promise<{
    access_key: string
    uid: string
  } | undefined> {
    if (this.ticket) {
      const response = await axios.post(
        "https://goda.srap.link/check_qrcode",
        {
          ticket: this.ticket,
        }
      );
  
      return response.data.data
    }
  }
}

export default QRCodeLogin;
