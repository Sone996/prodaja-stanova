import { FC, useState } from "react";
import { useHistory } from "react-router";
import NavigationDropdown from "./ui/NavigationDropdown";

const Navigation: FC<{ toggle: any }> = ({ toggle }) => {
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
          className="hover:text-lightBlue rounded-md p-3 mx-2"
        >
          Stanovi
        </span>
        <span
          onClick={() => toggle("Klijenti")}
          className="hover:text-lightBlue rounded-md p-3 mx-2"
        >
          Klijenti
        </span>
        <span
          onClick={() => toggle("Korisnici")}
          className="hover:text-lightBlue rounded-md p-3 mx-2"
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
