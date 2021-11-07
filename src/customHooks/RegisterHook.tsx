import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { authService } from "../serverStore/AuthModule/Auth.service";
import { notificationMsg } from "../services/BaseService";
import { errorMsg, successMsg } from "../services/MessageDisplayHandler";
import { IRegister } from "../types/types";

export function RegisterHook() {
  return useMutation((val: IRegister) => authService.register(val), {
    onError: (err: AxiosError) => {
      if (err && err.response) {
        errorMsg(notificationMsg(err, null));
      }
    },
    onSuccess: (response) => {
      successMsg(notificationMsg(response, "REGISTER_SUCCESS"));
    },
  });
}
