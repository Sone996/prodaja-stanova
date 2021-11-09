import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { clientService } from "../../serverStore/ClientModule/Client.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg, successMsg } from "../../services/MessageDisplayHandler";
import { IBasicClient } from "../../types/types";

export function useNewClientHook() {
    const queryClient = useQueryClient();

  return useMutation((val: IBasicClient) => clientService.newClient(val), {
    onSuccess: (response) => {
      successMsg(notificationMsg(response, "CLIENT_CREATED"));
      queryClient.invalidateQueries("clients");
    },
    onError: (err: AxiosError) => {
      if (err && err.response) {
        errorMsg(notificationMsg(err, null));
      }
    },
  });
}
