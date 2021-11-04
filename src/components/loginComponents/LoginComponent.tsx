import { FC } from "react";
import { LoginHook } from "../../customHooks/LoginHook";
import { ILogin } from "../../types/types";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputAndLabel from "../ui/InputAndLabel";

const loginFormDefault: ILogin = {
  username: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Potrebno je 4 - 30 karaktera")
    .max(30, "Potrebno je 4 - 30 karaktera")
    .required("Polje je obavezno"),
  password: Yup.string()
    .min(4, "Potrebno je 4 - 15 karaktera")
    .max(15, "Potrebno je 4 - 15 karaktera")
    .required("Polje je obavezno"),
});

const LoginComponent: FC = () => {
  const useLogin = LoginHook();

  const loginSubmit = async (data: ILogin) => {
    useLogin.mutate(data);
  };

  return (
    <>
      <div className="flex justify-center">
        <span className="text-3xl">Login</span>
      </div>
      <Formik
        initialValues={loginFormDefault}
        onSubmit={(values) => loginSubmit(values)}
        validationSchema={LoginSchema}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <InputAndLabel
              label="Username"
              name="username"
              errors={{ errors: errors.username, touched: touched.username }}
              type="text"
            />
            <InputAndLabel
              label="Password"
              name="password"
              errors={{ errors: errors.password, touched: touched.password }}
              type="password"
            />
            <button
              disabled={!(isValid && dirty)}
              type="submit"
              className={`button bg-blue-500 w-full text-white mt-6 ${
                !(isValid && dirty) ? "opacity-25 pointer-events-none" : null
              }`}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginComponent;
