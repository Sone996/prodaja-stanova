import { FC, useState } from "react";
import { useHistory } from "react-router";

const Navigation: FC<{ toggle: any }> = ({ toggle }) => {
  const [dropMenu, setDropMenu] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setDropMenu(!dropMenu);
  };

  const goToProfile = () => {
    history.push("/profile");
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

        <div className="ml-3 relative">
          <span
            onClick={toggleMenu}
            className="hover:text-lightBlue cursor-pointer text-right"
          >
            IME I PREZIME
          </span>

          {dropMenu ? (
            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex={-1}
            >
              <span
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightBlue cursor-pointer"
                onClick={goToProfile}
              >
                Your Profile
              </span>
              <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightBlue cursor-pointer">
                Sign out
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
