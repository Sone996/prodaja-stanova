import { IClientFilters } from "../../types/types";
import { clientsRepo } from "./Client.repo";

class CLientService {
  fetchClients(filters: IClientFilters | null) {
    if (filters && filters.id === null && filters.type === null) {
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
}

export const clientService = new CLientService();
