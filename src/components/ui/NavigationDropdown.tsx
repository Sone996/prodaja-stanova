import { FC, useEffect, useRef } from "react";
import g from "gsap";
import { useHistory } from "react-router-dom";

const NavigationDropdown: FC<{ status: boolean; email: string }> = ({
  status,
  email,
}) => {
  const history = useHistory();
  const ref: any = useRef();

  const animateObj = (obj: {
    scale: number;
    opacity: number;
    transformOrigin: string;
    duration: number;
  }) => {
    return {
      ...obj,
    };
  };

  const openMenu = () => {
    g.to(
      ".accountOptions",
      animateObj({
        scale: 1,
        transformOrigin: "right top",
        opacity: 1,
        duration: 0.1,
      })
    );
  };

  useEffect(() => {
    g.fromTo(
      ".accountOptions",
      animateObj({
        scale: 0,
        transformOrigin: "right top",
        opacity: 0,
        duration: 0.1,
      }),
      animateObj({
        scale: 1,
        transformOrigin: "right top",
        opacity: 1,
        duration: 0.1,
      })
    ).reverse();
  }, []);

  const closeMenu = () => {
    g.to(
      ".accountOptions",
      animateObj({
        scale: 0,
        transformOrigin: "right top",
        opacity: 0,
        duration: 0.1,
      })
    );
  };

  const goToProfile = () => {
    history.push("/profile");
  };
  const handleLogOut = () => {
    console.log("logout");
  };

  useEffect(() => {
    if (status) {
      openMenu();
    }
    const checkIfClickedOutside = (e: any) => {
      if (status && ref.current && !ref.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [status]);

  return (
    <div
      className="absolute -bottom-1 right-0 transform translate-y-36 bg-gray-400
            flex flex-col z-10 accountOptions rounded-md w-64"
      ref={ref}
    >
      <div className="flex flex-col text-sm py-2 px-10 border-b border-lightGray">
        <div className="flex">
          <span className="mr-2">Signed in as</span>
          <span className="font-medium">{email}</span>
        </div>
      </div>
      <div className="border-b border-lightGray pb-3">
        <div className="flex py-2 pl-3 items-center hover:bg-lightGray cursor-pointer">
          <span
            className="hover:text-lightBlue cursor-pointer text-right"
            onClick={goToProfile}
          >
            Profil
          </span>
        </div>
      </div>
      <div className="flex py-2 pl-4 items-center hover:bg-lightGray cursor-pointer rounded-md">
        <span
          onClick={handleLogOut}
          className="hover:text-lightBlue cursor-pointer text-right"
        >
          Odjavi se
        </span>
      </div>
    </div>
  );
};

export default NavigationDropdown;