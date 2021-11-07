import { clientsRepo } from "./Client.repo";

class CLientService {
  fetchUsers() {
    return clientsRepo.fetchCLients();
  }

  //   newUser(data: INewUserModal) {
  //     data.password = SHA512(data.password).toString();
  //     return clientsRepo.newUser(data);
  //   }

  //   editUser(data: INewUserModal) {
  //     data.password = SHA512(data.password).toString();
  //     return clientsRepo.editUser({
  //       id: data.id,
  //       data: omit(data, ["id"]),
  //     });
  //   }

  //   deleteUser(id: number) {
  //     return clientsRepo.deleteUser(id);
  //   }
}

export const clientService = new CLientService();
