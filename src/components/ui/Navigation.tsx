import { FC, useState } from "react";
import NavigationDropdown from "./NavigationDropdown";

const Navigation: FC<{ toggle: any; activeTab: string }> = ({
  toggle,
  activeTab,
}) => {
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
        <span
          onClick={() => toggle("Klijenti")}
          className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
            activeTab === "Klijenti" ? "text-lightBlue" : null
          }`}
        >
          Klijenti
        </span>
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
            <NavigationDropdown status={isMenuOpen} email={"admin"} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navigation;