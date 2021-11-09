import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { authService } from "../serverStore/AuthModule/Auth.service";
import { notificationMsg } from "../services/BaseService";
import { errorMsg, successMsg } from "../services/MessageDisplayHandler";
import { ILogin } from "../types/types";

export function useLoginHook() {
  const history = useHistory();

  return useMutation((val: ILogin) => authService.login(val), {
    onSuccess: (response) => {
      successMsg(notificationMsg(response, "lOGIN_SUCCESS"));
      history.push("/");
    },
    onError: (err: AxiosError) => {
      if (err && err.response) {
        errorMsg(notificationMsg(err, null));
      }
    },
  });
}
