import { FC, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import Navigation from "../components/Navigation";
import Users from "../pages/admin/Users";
import Apartmans from "../pages/shared/Apartments";
import Clients from "../pages/shared/Clients";
import Profile from "../pages/shared/Profile";
import SingleApartment from "../pages/shared/SingleApartment";

const AppLayout: FC = () => {
  const [activeTab, setActiveTab] = useState("Stanovi");
  const history = useHistory();

  const taggleTabs = (val: string): void => {
    if (window.location.pathname != "/") {
      history.push("/");
    }
    setActiveTab(val);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Navigation toggle={taggleTabs} />
      <Switch>
        {/* <Route path="/profile/:id" component={Profile} /> */}
        <Route path="/profile" component={Profile} />
        {/* <Route path="/apartment/:id" component={SingleApartment} /> */}
        <Route path="/apartment" component={SingleApartment} />
        <Route path="/">
          {activeTab === "Stanovi" ? (
            <Apartmans />
          ) : activeTab === "Korisnici" ? (
            <Users />
          ) : activeTab === "Klijenti" ? (
            <Clients />
          ) : (
            <div>loading...</div>
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default AppLayout;
