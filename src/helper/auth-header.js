import VueCookies from "vue-cookies";

export function authHeader() {
  const token = VueCookies.get('token')
  if (token) {
    return "Bearer " + token
  } else {
    return "";
  }
}
