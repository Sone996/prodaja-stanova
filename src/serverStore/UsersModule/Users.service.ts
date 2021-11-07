import { SHA512 } from "crypto-js";
import { omit } from "lodash";
import { INewUserModal } from "../../types/types";
import { usersRepo } from "./Users.repo";

class UsersService {
  fetchUsers() {
    return usersRepo.fetchUsers();
  }

  newUser(data: INewUserModal) {
    data.password = SHA512(data.password).toString();
    return usersRepo.newUser(data);
  }

  editUser(data: INewUserModal) {
    data.password = SHA512(data.password).toString();
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
