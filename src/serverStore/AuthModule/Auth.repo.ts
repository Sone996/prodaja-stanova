import { api } from "../../api/Api";
import { ILogin } from "../../types/types";
const ROUTES = {
  LOGIN: "/user/login",
  REGISTER: "/register",
  FETCH_ACCOUNT: "/user/session",
  LOGOUT: "/logout",
};

class AuthRepo {
  login(data: ILogin) {
    console.log(data)
    return api.post(ROUTES.LOGIN, data);
  }

  register(data: any) {
    return api.post(ROUTES.REGISTER, data);
  }

  fetchActiveAccount() {
    return api.get(ROUTES.FETCH_ACCOUNT);
  }
  logout() {
    return api.post(ROUTES.LOGOUT);
  }
}

export const authRepo = new AuthRepo();
