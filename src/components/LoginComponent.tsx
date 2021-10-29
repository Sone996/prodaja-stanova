import { FC, useState } from "react";
import { ILogin } from "../types/types";

const loginFormDefault: ILogin = {
  email: "",
  password: "",
};

const LoginComponent: FC = () => {
  const [form, setForm] = useState(loginFormDefault);

  //   const useLogin = LoginHook();

  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const loginSubmit = async () => {
    // useLogin.mutate(form);
  };

  return (
    <>
      <div className="flex justify-center">
        <span className="text-3xl">Login</span>
      </div>
      <div className="flex flex-col justify-center mt-8">
        <span>Email</span>
        <input
          className="input"
          type="text"
          name="email"
          value={form.email}
          data-test="loginEmail"
          onChange={inputLoginHandler}
        />
      </div>
      <div className="flex flex-col justify-center mt-4">
        <span>Password</span>
        <input
          className="input"
          type="password"
          name="password"
          data-test="loginPassword"
          value={form.password}
          onChange={inputLoginHandler}
        />
      </div>
      <div className="flex mt-4 justify-between">
        <button
          className="button bg-blue-500 w-full text-white"
          onClick={loginSubmit}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginComponent;
