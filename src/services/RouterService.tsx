// import { useContext } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
// import { AppContext } from "../Context/AppProvider";
// import { ActionTypes } from "../Context/Reducers/App/AppProvider.types";
// import { authService } from "../Modules/AuthModule/Auth.service";

export const useFetchActiveUser = () => {
  const history = useHistory();

  const fetch = async () => {
    console.log("fetch active acount");
    // const res = await authService.fetchActiveAccount();
    // return res.data;
  };

  return useQuery("activeUser", fetch, {
    onSuccess: (val: any) => {
      //   dispatch({
      //     type: ActionTypes.SET_USER,
      //     payload: val,
      //   });
    },
    onError: () => {
      history.push("/login");
    },
    onSettled: () => {},
  });
};
