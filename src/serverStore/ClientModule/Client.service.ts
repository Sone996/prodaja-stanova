import { IClientFilters } from "../../types/types";
import { clientsRepo } from "./Client.repo";

class CLientService {
  fetchClients(filters: IClientFilters) {
    if (filters.id === null && filters.type === null) {
      return clientsRepo.fetchCLients(null);
    }
    return clientsRepo.fetchCLients(filters);
  }

  newClient(data: any) {
    return clientsRepo.newClient(data);
  }

  fetchSingleClient(id: string | number) {
    return clientsRepo.fetchSingleClient(id);
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
