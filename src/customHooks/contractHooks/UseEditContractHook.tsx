import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { contractService } from "../../serverStore/ContractModule/Contract.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg, successMsg } from "../../services/MessageDisplayHandler";
import { IEditContract } from "../../types/types";

export function useEditContractHook() {
  const history = useHistory();
  return useMutation((data: IEditContract) => contractService.editContract(data), {
    onSuccess: (response) => {
      successMsg(notificationMsg(response, "CONTRACT_CREATED"));
      history.goBack();
    },
    onError: (err: AxiosError) => {
      if (err && err.response) {
        errorMsg(notificationMsg(err, null));
      }
    },
  });
}
