import { FC, useState } from "react";
import Navigation from "../components/Navigation";
import Users from "../pages/admin/Users";
import Apartmans from "../pages/shared/Apartments";

const AppLayout: FC = () => {
  const [activeTab, setActiveTab] = useState("Stanovi");

  const taggleTabs = (val: string): void => {
    setActiveTab(val);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Navigation toggle={taggleTabs} />
      {activeTab === "Stanovi" ? (
        <Apartmans />
      ) : activeTab === "Klijenti" ? (
        <Users />
      ) : activeTab === "Klijenti" ? (
        <div>in progress</div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default AppLayout;
