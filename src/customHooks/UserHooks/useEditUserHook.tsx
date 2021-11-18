import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { RootStore } from "../../clientStore";
import { usersService } from "../../serverStore/UsersModule/Users.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg, successMsg } from "../../services/MessageDisplayHandler";
import { INewUserModal } from "../../types/types";

export function useEditUserHook() {
  const queryClient = useQueryClient();
  const { appStore } = RootStore();
  return useMutation((val: INewUserModal) => usersService.editUser(val), {
    onSuccess: (response) => {
      successMsg(notificationMsg(response, "USER_EDITED"));
      queryClient.invalidateQueries("users");
      queryClient.invalidateQueries("activeUser");
      appStore.closeModal();
    },
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
  });
}
