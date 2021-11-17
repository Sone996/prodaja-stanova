import { authRepo } from "./Auth.repo";
import { SHA512 } from "crypto-js";
import { TOKEN_LS_NAME } from "../../constants/Constants";
import { ILogin, IRegister } from "../../types/types";

class AuthService {
  async login(data: ILogin) {
    try {
      data.password = SHA512(data.password).toString();
      const res = await authRepo.login(data);
      localStorage.setItem(TOKEN_LS_NAME, res.data["session-id"]);
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  register(data: IRegister) {
    data.password = SHA512(data.password).toString();
    data.password_confirm = SHA512(data.password_confirm).toString();
    return authRepo.register(data);
  }

  fetchActiveAccount() {
    return authRepo.fetchActiveAccount();
  }

  logout() {
    return authRepo.logout();
  }

  isLogged() {
    return localStorage.getItem(TOKEN_LS_NAME);
  }
}

export const authService = new AuthService();
