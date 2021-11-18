import { SHA512 } from "crypto-js";
import { omit } from "lodash";
import { INewUserModal } from "../../types/types";
import { usersRepo } from "./Users.repo";

class UsersService {
  fetchUsers(filters: { id: string | null; role: string | null }) {
    if (filters.id === null && filters.role === null) {
      return usersRepo.fetchUsers(null);
    }
    return usersRepo.fetchUsers(filters);
  }

  newUser(data: INewUserModal) {
    if (data.password === data.password_confirm) {
      data.password = SHA512(data.password).toString();
      data.password_confirm = data.password;
    } else {
      data.password = SHA512(data.password).toString();
      data.password_confirm
        ? (data.password_confirm = SHA512(data.password_confirm).toString())
        : (data.password_confirm = data.password_confirm);
    }
    return usersRepo.newUser(data);
  }

  editUser(data: INewUserModal) {
    if (data.password === "" || data.password_confirm === "") {
      return usersRepo.editUser({
        id: data.id,
        data: omit(data, ["id", "password", "password_confirm"]),
      });
    }
    if (data.password === data.password_confirm) {
      data.password = SHA512(data.password).toString();
      data.password_confirm = data.password;
    }
    if (data.password !== data.password_confirm) {
      data.password = SHA512(data.password).toString();
      data.password_confirm = SHA512(data.password).toString();
    }
    return usersRepo.editUser({
      id: data.id,
      data: omit(data, ["id"]),
    });
  }

  deleteUser(id: number) {
    return usersRepo.deleteUser(id);
  }
}

export const usersService = new UsersService();
