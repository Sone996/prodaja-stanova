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

  fetchContract(data: any) {
    const URL = `${ROUTES.CLIENTS}/${data.clientId}${ROUTES.APARTMENT}/${data.apartmentId}${ROUTES.CONTRACT}/${data.contractId}`;
    return api.get(URL);
  }

  editContract(data: any) {
    const URL = `${ROUTES.CLIENTS}/${data.clientId}${ROUTES.APARTMENT}/${data.apartmentId}${ROUTES.CONTRACT}/${data.contractId}`;
    return api.patch(URL, data.data);
  }
}

export const contractRepo = new ContractRepo();
