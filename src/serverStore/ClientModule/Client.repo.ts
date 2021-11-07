import { api } from "../../api/Api";
// import { INewClientModal } from "../../types/types";

const ROUTES = {
  CLIENTS: "/customer",
};

class ClientsRepo {
  fetchCLients() {
    return api.get(ROUTES.CLIENTS);
  }

//   newClient(data: INewClientModal) {
//     return api.post(ROUTES.CLIENTS, data);
//   }

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
