import { api } from "../../api/Api";

const ROUTES = {
  CLIENTS: "/customer",
  CONTRACT: "/contract",
  APARTMENT: "/apartment",
};

class ContractRepo {
  createPreContract(data: any) {
    const URL = `${ROUTES.CLIENTS}/${data.customerId}${ROUTES.APARTMENT}/${data.apartmentId}${ROUTES.CONTRACT}`;
    return api.post(URL, data.data.data);
  }

  fetchContractsForApartment(id: string) {
    const URL = `${ROUTES.APARTMENT}/${id}${ROUTES.CLIENTS}`;
    return api.get(URL);
  }

  fetchContractsForClient(id: string) {
    const URL = `${ROUTES.CLIENTS}/${id}${ROUTES.APARTMENT}`;
    return api.get(URL);
  }
}

export const contractRepo = new ContractRepo();
