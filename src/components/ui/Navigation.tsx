import { FC, useState } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router";
import { ILoggedUser } from "../../types/types";
import NavigationDropdown from "./NavigationDropdown";

const Navigation: FC<{ toggle: (val: string) => void; activeTab: string }> = ({
  toggle,
  activeTab,
}) => {
  const loggedUser: ILoggedUser | undefined =
    useQueryClient().getQueryData("activeUser");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const history = useHistory();

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openReports = () => {
    toggle("Izveštaji");
    history.push("/reports");
  };

  return (
    <div className="">
      <div className="flex items-center justify-between items-around py-2 px-6 border-b">
        <span className="text-3xl">PRODAJA STANOVA</span>
        <span
          onClick={() => toggle("Stanovi")}
          className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
            activeTab === "Stanovi" ? "text-lightBlue" : null
          }`}
        >
          Stanovi
        </span>
        <span
          onClick={() => toggle("Klijenti")}
          className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
            activeTab === "Klijenti" ? "text-lightBlue" : null
          }`}
        >
          Klijenti
        </span>
        {loggedUser?.role === "admin" && (
          <span
            onClick={() => toggle("Korisnici")}
            className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
              activeTab === "Korisnici" ? "text-lightBlue" : null
            }`}
          >
            Korisnici
          </span>
        )}
        {loggedUser?.role === "admin" ||
          (loggedUser?.role === "finance" && (
            <span
              onClick={openReports}
              className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
                activeTab === "Izveštaji" ? "text-lightBlue" : null
              }`}
            >
              Izveštaji
            </span>
          ))}
        <span onClick={openMenu} className="cursor-pointer text-right" data-test="dropdown">
          {loggedUser!.username}
          <div className="relative bottom-0 right-0">
            <NavigationDropdown
              status={isMenuOpen}
              loggedUser={loggedUser!.username}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navigation;
