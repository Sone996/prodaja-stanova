import { api } from "../../api/Api";
import { INewUserModal } from "../../types/types";

const ROUTES = {
  USER: "/user",
};

class UsersRepo {
  fetchUsers() {
    return api.get(ROUTES.USER);
  }

  newUser(data: INewUserModal) {
    return api.post(ROUTES.USER, data);
  }

  editUser(data: any) {
    const URL = `${ROUTES.USER}/${data.id}`;
    return api.patch(URL, data.data);
  }

  deleteUser(id: number) {
    const URL = `${ROUTES.USER}/${id}`;
    return api.delete(URL);
  }
}

export const usersRepo = new UsersRepo();
