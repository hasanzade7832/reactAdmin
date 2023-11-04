import { ApiConst } from "../helper/constant-helper";
import httpClient from "../helper/httpClient";
class projectService {
  //login
  async webLogin(loginModel) {
    return await httpClient.post(ApiConst.webLogin, loginModel);
  }
}
export default new projectService();
