import { FC, useState } from "react";
import { IRegister } from "../types/types";

const registerFormTemplate: IRegister = {
  name: "",
  surname: "",
  email: "",
  password: "",
  role: "",
};
const RegisterComponent: FC = () => {
  const [registerForm, setRegisterForm] = useState(registerFormTemplate);
  //   const [loginForm, setLoginForm] = useState(loginFormDefault);
  //   const useLogin = LoginHook();

  const inputRegisterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
    // if (event.target.name === "email" || event.target.name === "password") {
    //   setLoginForm({
    //     ...loginForm,
    //     [event.target.name]: event.target.value,
    //   });
    // }
  };

  //   const registerMutation = useMutation(
  //     (val: any) => authService.register(val),
  //     {
  //       onMutate: () => {
  //         dispatch({
  //           type: ActionTypes.SET_LOADER,
  //           payload: true,
  //         });
  //       },
  //       onError: (err: any) => {
  //         setRegisterForm(registerFormTemplate);
  //         dispatch({
  //           type: ActionTypes.SET_LOADER,
  //           payload: false,
  //         });
  //         errorMsg(notificationMsg(err, null));
  //       },
  //       onSuccess: (response: any) => {
  //         dispatch({
  //           type: ActionTypes.SET_LOADER,
  //           payload: false,
  //         });
  //         useLogin.mutate(loginForm);
  //       },
  //     }
  //   );

  const registerAction = () => {
    // registerMutation.mutate(registerForm);
  };

  return (
    <>
      <div className="flex justify-center">
        <span className="text-3xl">Register</span>
      </div>
      <div className="flex flex-col justify-center mt-4">
        <span>First Name</span>
        <input
          className="input"
          type="text"
          name="name"
          autoComplete="off"
          value={registerForm.name}
          onChange={inputRegisterHandler}
        />
      </div>
      <div className="flex flex-col justify-center mt-4">
        <span>Last Name</span>
        <input
          className="input"
          type="text"
          name="surname"
          autoComplete="off"
          value={registerForm.surname}
          onChange={inputRegisterHandler}
        />
      </div>
      <div className="flex flex-col justify-center mt-4">
        <span>Email</span>
        <input
          className="input"
          type="text"
          name="email"
          autoComplete="off"
          value={registerForm.email}
          onChange={inputRegisterHandler}
        />
      </div>
      <div className="flex flex-col justify-center mt-4">
        <span>Password</span>
        <input
          className="input"
          type="password"
          name="password"
          autoComplete="new-password"
          value={registerForm.password}
          onChange={inputRegisterHandler}
        />
      </div>
      <div className="flex mt-4 justify-between">
        <div className="button bg-darkGreen w-full" onClick={registerAction}>
          Register
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
