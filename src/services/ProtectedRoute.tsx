import { FC, memo } from "react";
import { useQueryClient } from "react-query";
import { Route } from "react-router-dom";
import { ILoggedUser } from "../types/types";
// import { AppContext } from "../Context/AppProvider";
import { useFetchActiveUser } from "./RouterService";

export const ProtectedRoute: FC<any> = ({ component: Component, ...rest }) => {
  const loggedUser = useQueryClient().getQueryData<ILoggedUser>("activeUser");

  useFetchActiveUser();

  if (!loggedUser) {
    return null;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default memo(ProtectedRoute);
