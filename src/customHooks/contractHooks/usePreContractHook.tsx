import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { contractService } from "../../serverStore/ContractModule/Contract.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg, successMsg } from "../../services/MessageDisplayHandler";
import { IPreContract } from "../../types/types";

export function usePreContractHook() {
  const queryClient = useQueryClient();
  return useMutation(
    (val: IPreContract) => contractService.createPreContract(val),
    {
      onSuccess: (response) => {
        successMsg(notificationMsg(response, "PRE_CONTRACT_MADE"));
        queryClient.invalidateQueries("contractsByApartment");
      },
      onError: (err: AxiosError) => {
        if (err && err.response) {
          errorMsg(notificationMsg(err, null));
        }
      },
    }
  );
}
