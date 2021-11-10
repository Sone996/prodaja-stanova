import { omit } from "lodash";
import { IPreContract } from "../../types/types";
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
}

export const contractService = new ContractService();
