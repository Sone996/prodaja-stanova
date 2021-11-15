import { api } from "../../api/Api";
import queryString from "query-string";
import { IClientFilters } from "../../types/types";
// import { INewClientModal } from "../../types/types";

const ROUTES = {
  CLIENTS: "/customer",
};

class ClientsRepo {
  fetchCLients(filters: IClientFilters | null) {
    if (filters === null) {
      return api.get(ROUTES.CLIENTS);
    }
    const query = queryString.stringify(filters, {
      skipNull: true,
      skipEmptyString: true,
    });
    const URL = `${ROUTES.CLIENTS}?${query}`;
    return api.get(URL);
  }

  newClient(data: any) {
    return api.post(ROUTES.CLIENTS, data);
  }

  fetchSingleClient(id: number | string) {
    const URL = `${ROUTES.CLIENTS}/${id}`;
    return api.get(URL);
  }
}

export const clientsRepo = new ClientsRepo();
