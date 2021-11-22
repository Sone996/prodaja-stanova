import { FC, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import { observer } from "mobx-react-lite";
import Navigation from "../components/ui/Navigation";
import Users from "../pages/admin/Users";
import Apartmans from "../pages/shared/Apartments";
import Clients from "../pages/shared/Clients";
import Profile from "../pages/shared/Profile";
import SingleApartment from "../pages/shared/SingleApartment";
import NewApartment from "../pages/shared/NewApartment";
import { RootStore } from "../clientStore";
import AddNewClientModal from "../components/modals/AddNewClientModal";
import NewUserModal from "../components/modals/NewUserModal";
import SingleClient from "../pages/shared/SingleClient";
import ChooseExistingClientModal from "../components/modals/ChooseExistingClientModal";
import AddContractModal from "../components/modals/AddContractModal";
import ContractPage from "../pages/shared/ContractPage";
import ReportsPage from "../pages/shared/ReportsPage";

const AppLayout: FC = observer(() => {
  const { appStore } = RootStore();
  const [activeTab, setActiveTab] = useState("Stanovi");
  const history = useHistory();

  const taggleTabs = (val: string): void => {
    if (window.location.pathname !== "/") {
      history.push("/");
    }
    setActiveTab(val);
  };
  // modal logic
  const modalSwitch = (prop: string) => {
    switch (prop) {
      case "add-new-client-modal":
        return <AddNewClientModal />;
      case "new-user-modal":
        return <NewUserModal />;
      case "choose-existing-client-modal":
        return <ChooseExistingClientModal />;
      case "add-contract-modal":
        return <AddContractModal />;
      default:
        break;
    }
  };
  // END :: modal logic

  return (
    <div className="flex flex-col w-full h-full" data-test="layout">
      {/* MODALS */}
      {appStore.getModal.status ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex modal">
          <div className="modal-overlay fixed top-0 left-0 modal-overlay h-screen w-screen flex"></div>
          <div className="modal flex items-center justify-center w-full">
            {modalSwitch(appStore.getModal.name)}
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* END :: MODALS */}
      <Navigation toggle={taggleTabs} activeTab={activeTab} />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/apartment/:id" component={SingleApartment} />
        <Route path="/new-apartment" component={NewApartment} />
        <Route path="/client/:id" component={SingleClient} />
        <Route path="/contract" component={ContractPage} />
        <Route path="/reports" component={ReportsPage} />
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
});

export default AppLayout;
