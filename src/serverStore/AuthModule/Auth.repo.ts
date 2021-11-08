import { api } from "../../api/Api";
import { ILogin, IRegister } from "../../types/types";
const ROUTES = {
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  FETCH_ACCOUNT: "/user/session",
  LOGOUT: "/user/logout",
};

class AuthRepo {
  login(data: ILogin) {
    return api.post(ROUTES.LOGIN, data);
  }

  register(data: IRegister) {
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
