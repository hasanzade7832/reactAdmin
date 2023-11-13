import { ApiConst } from "../helper/constant-helper";
import httpClient from "../helper/httpClient";
class projectService {
  //login
  async webLogin(loginModel) {
    return await httpClient.post(ApiConst.webLogin, loginModel);
  }
  // getAllCompany
  async getAllCompany() {
    return await httpClient.post(ApiConst.getAllCompany);
  }
}
export default new projectService();
