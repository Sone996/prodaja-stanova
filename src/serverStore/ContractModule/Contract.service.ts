import { omit } from "lodash";
import { IEditContract, IIdsForContract, IPreContract } from "../../types/types";
import { contractRepo } from "./Contract.repo";

class ContractService {
  createPreContract(data: IPreContract) {
    return contractRepo.createPreContract({
      apartmentId: data.apartment_id,
      customerId: data.customer_id,
      data: omit(data, ["apartment_id", "customer_id"]),
    });
  }

  fetchContractsForApartment(id: string) {
    return contractRepo.fetchContractsForApartment(id);
  }

  fetchContractsForClient(id: string) {
    return contractRepo.fetchContractsForClient(id);
  }

  fetchContract(data: IIdsForContract) {
    return contractRepo.fetchContract({
      apartmentId: data.apartment_id,
      clientId: data.client_id,
      contractId: data.contract_id,
    });
  }

  editContract(data: IEditContract) {
    if (data.user.role === "admin") {
      return contractRepo.editContract({
        apartmentId: data.apartment.id,
        clientId: data.customer.id,
        contractId: data.id,
        data: omit(data, [
          "apartment",
          "contract_number",
          "customer",
          "date_of_creation",
          "date_of_update",
          "deleted",
          "first_visit",
          "id",
          "user",
          "approved",
        ]),
      });
    }
    return contractRepo.editContract({
      apartmentId: data.apartment.id,
      clientId: data.customer.id,
      contractId: data.id,
      data: omit(data, [
        "apartment",
        "contract_number",
        "customer",
        "date_of_creation",
        "date_of_update",
        "deleted",
        "first_visit",
        "id",
        "user",
      ]),
    });
  }
}

export const contractService = new ContractService();
