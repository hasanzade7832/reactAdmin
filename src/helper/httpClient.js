import axios from "axios";
import { authHeader } from "./auth-header";
// import router from "@/router/router";
// const baseUrl = "http://130.185.76.18:4040/";
const baseUrl = process.env.REACT_APP_ENV;

const Api_Path = `${baseUrl}/`;
console.log("apiPath", baseUrl);

const httpClient = axios.create({
  baseURL: Api_Path,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
httpClient.defaults.headers.post["Access-Control-Allow-Methods"] = "*";
httpClient.defaults.headers.post["Access-Control-Allow-Headers"] = "*";

const authInterceptor = (config) => {
  config.headers["Authorization"] = authHeader();
  return config;
};

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      //   router.push('/')
    }
    return Promise.reject(error);
  }
);
httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
