import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { authService } from "../serverStore/AuthModule/Auth.service";

export const useFetchActiveUser = () => {
  const history = useHistory();

  const fetch = async () => {
    const res = await authService.fetchActiveAccount();
    return res.data;
  };

  return useQuery("activeUser", fetch, {
    onError: () => {
      history.push("/login");
    },
  });
};
