import { api } from "../../api/Api";
import queryString from "query-string";
import { INewUserModal } from "../../types/types";

const ROUTES = {
  USER: "/user",
};

class UsersRepo {
  fetchUsers(filters: { id: string | null; role: string | null } | null) {
    if (filters === null) {
      return api.get(ROUTES.USER);
    }
    const query = queryString.stringify(filters, {
      skipNull: true,
      skipEmptyString: true,
    });
    const URL = `${ROUTES.USER}?${query}`;
    return api.get(URL);
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
