import { FC, useEffect, useRef } from "react";
import g from "gsap";
import { useHistory } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import { TOKEN_LS_NAME } from "../../constants/Constants";
import { authService } from "../../serverStore/AuthModule/Auth.service";

const NavigationDropdown: FC<{
  status: boolean;
  loggedUser: string;
}> = ({ status, loggedUser }) => {
  const queryClient = useQueryClient();
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
    closeMenu();
  };

  const handleLogOut = () => {
    logoutMutation.mutate();
  };

  const logoutMutation = useMutation(() => authService.logout(), {
    onSuccess: () => {
      queryClient.removeQueries("activeUser");
      localStorage.removeItem(TOKEN_LS_NAME);
      history.push("/login");
    },
  });

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
    // eslint-disable-next-line
  }, [status]);

  return (
    <div
      className="absolute -bottom-1 right-0 transform translate-y-36 bg-gray-400
            flex flex-col z-10 accountOptions rounded-md w-64"
      ref={ref}
    >
      <div className="flex flex-col text-sm py-2 px-10 border-b border-white">
        <div className="flex">
          <span className="font-medium">{loggedUser}</span>
        </div>
      </div>
      <div className="border-b border-white pb-3">
        <div className="flex pt-2 pl-3 items-center hover:bg-lightGray cursor-pointer">
          <span
            className="hover:text-lightBlue cursor-pointer text-right"
            onClick={goToProfile}
            data-test="profile"
          >
            Profil
          </span>
        </div>
      </div>
      <div className="flex py-2 pl-4 items-center hover:bg-lightGray cursor-pointer rounded-md">
        <span
          onClick={handleLogOut}
          className="hover:text-lightBlue cursor-pointer text-right"
          data-test="logout"
        >
          Odjavi se
        </span>
      </div>
    </div>
  );
};

export default NavigationDropdown;
