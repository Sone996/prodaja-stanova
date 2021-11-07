import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { RootStore } from "../clientStore";
import { usersService } from "../serverStore/UsersModule/Users.service";
import { notificationMsg } from "../services/BaseService";
import { errorMsg, successMsg } from "../services/MessageDisplayHandler";

export function DeleteUserHook() {
  const queryClient = useQueryClient();
  const { appStore } = RootStore();
  return useMutation((val: number) => usersService.deleteUser(val), {
    onSuccess: (response) => {
      successMsg(notificationMsg(response, "USER_DELETED"));
      queryClient.invalidateQueries("users");
      appStore.closeModal();
    },
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
      appStore.closeModal();
    },
  });
}
