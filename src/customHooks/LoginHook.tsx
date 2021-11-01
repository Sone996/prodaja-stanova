import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { authService } from "../serverStore/AuthModule/Auth.service";

export function LoginHook() {
  const history = useHistory();

  return useMutation((val: any) => authService.login(val), {
    onMutate: () => {},
    onError: (err: any) => {
      console.log(err.response.data.errors);
      //   errorMsg(notificationMsg(err, null));
    },
    onSettled: (response: any) => {
      //   successMsg(notificationMsg(response, "lOGIN_SUCCESS"));
      console.log(response);
      history.push("/");
    },
  });
}
