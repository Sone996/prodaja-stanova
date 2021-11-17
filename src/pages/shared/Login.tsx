import { FC, useState } from "react";
import LoginComponent from "../../components/loginComponents/LoginComponent";
import RegisterComponent from "../../components/loginComponents/RegisterComponent";

const Login: FC = () => {
  const [register, setRegister] = useState<boolean>(false);

  const toggleForm = () => {
    setRegister(!register);
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col w-4/12 border h-2/3 p-4">
        {!register ? (
          <LoginComponent />
        ) : (
          <RegisterComponent toggleForm={toggleForm} />
        )}

        <button
          className="button bg-darkGreen w-full text-white mt-5"
          onClick={() => toggleForm()}
        >
          {register ? "Go Back" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Login;
