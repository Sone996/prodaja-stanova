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
    console.log(data);
    return api.post(ROUTES.CLIENTS, data);
  }

  fetchSingleClient(id: number | string) {
    const URL = `${ROUTES.CLIENTS}/${id}`;
    return api.get(URL);
  }

  //   editClient(data: any) {
  //     const URL = `${ROUTES.CLIENTS}/${data.id}`;
  //     return api.patch(URL, data.data);
  //   }

  //   deleteClient(id: number) {
  //     const URL = `${ROUTES.CLIENTS}/${id}`;
  //     return api.delete(URL);
  //   }
}

export const clientsRepo = new ClientsRepo();
