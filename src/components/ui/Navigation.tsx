import { FC, useState } from "react";
import { useQueryClient } from "react-query";
import NavigationDropdown from "./NavigationDropdown";

const Navigation: FC<{ toggle: (val: string) => void; activeTab: string }> = ({
  toggle,
  activeTab,
}) => {
  const loggedUser: any = useQueryClient().getQueryData("activeUser");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        {loggedUser.role === "admin" && (
          <span
            onClick={() => toggle("Klijenti")}
            className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
              activeTab === "Klijenti" ? "text-lightBlue" : null
            }`}
          >
            Klijenti
          </span>
        )}
        <span
          onClick={() => toggle("Korisnici")}
          className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
            activeTab === "Korisnici" ? "text-lightBlue" : null
          }`}
        >
          Korisnici
        </span>

        <span onClick={openMenu} className="cursor-pointer text-right">
          IME I PREZIME
          <div className="relative bottom-0 right-0">
            <NavigationDropdown
              status={isMenuOpen}
              loggedUser={loggedUser.username}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navigation;
