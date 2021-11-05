import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { authService } from "../serverStore/AuthModule/Auth.service";
import { ILogin } from "../types/types";

export function LoginHook() {
  const history = useHistory();

  return useMutation((val: ILogin) => authService.login(val), {
    onMutate: () => {},
    onError: (err: AxiosError) => {
      if (err && err.response) {
        console.log(err.response.data.errors);
      }
      //   errorMsg(notificationMsg(err, null));
    },
    onSettled: (response) => {
      //   successMsg(notificationMsg(response, "lOGIN_SUCCESS"));
      console.log(response);
      history.push("/");
    },
  });
}
