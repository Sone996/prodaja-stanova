import { FC } from "react";
import { useHistory } from "react-router";

const Navigation: FC<{ toggle: any }> = ({ toggle }) => {
  const history = useHistory();

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
        <span
          onClick={goToProfile}
          className="hover:text-lightBlue cursor-pointer text-right"
        >
          IME I PREZIME
        </span>
      </div>
    </div>
  );
};

export default Navigation;
