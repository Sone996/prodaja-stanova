import { clientsRepo } from "./Client.repo";

class CLientService {
  fetchUsers() {
    return clientsRepo.fetchCLients();
  }

  newClient(data: any) {
    return clientsRepo.newClient(data);
  }

  //   editCLient(data: any) {
  //     return clientsRepo.editUser({
  //       id: data.id,
  //       data: omit(data, ["id"]),
  //     });
  //   }

  //   deleteCLient(id: number) {
  //     return clientsRepo.deleteUser(id);
  //   }
}

export const clientService = new CLientService();
