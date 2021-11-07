import { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ILogin, IRegister } from "../../types/types";
import InputAndLabel from "../ui/InputAndLabel";
import { RegisterHook } from "../../customHooks/RegisterHook";
import { LoginHook } from "../../customHooks/LoginHook";

const registerFormTemplate: IRegister = {
  first_name: "",
  last_name: "",
  role: "salesman",
  username: "",
  password: "",
  password_confirm: "",
};

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required("Polje je obavezno"),
  last_name: Yup.string().required("Polje je obavezno"),
  username: Yup.string().required("Polje je obavezno"),
  password: Yup.string().required("Polje je obavezno"),
  password_confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Lozinke se ne poklapaju"
  ),
});

const RegisterComponent: FC = () => {
  const useLogin = LoginHook();
  const useRegister = RegisterHook();

  const registerAction = (data: any) => {
    let logindata: ILogin = {
      username: data.username,
      password: data.password,
    };
    useRegister.mutate(data);
    useRegister.isSuccess && useLogin.mutate(logindata);
  };

  return (
    <>
      <div className="flex justify-center">
        <span className="text-3xl">Register</span>
      </div>
      <div className="flex flex-col justify-center">
        <Formik
          initialValues={registerFormTemplate}
          onSubmit={(values) => registerAction(values)}
          validationSchema={RegisterSchema}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form autoComplete="off">
              <InputAndLabel
                label="Ime"
                name="first_name"
                errors={{
                  errors: errors.first_name,
                  touched: touched.first_name,
                }}
                type="text"
              />
              <InputAndLabel
                label="Preime"
                name="last_name"
                errors={{
                  errors: errors.last_name,
                  touched: touched.last_name,
                }}
                type="text"
              />
              <InputAndLabel
                label="Korisničko ime"
                name="username"
                errors={{ errors: errors.username, touched: touched.username }}
                type="text"
              />
              <InputAndLabel
                label="Lozinka"
                name="password"
                errors={{ errors: errors.password, touched: touched.password }}
                type="password"
              />
              <InputAndLabel
                label="Ponovi lozinku"
                name="password_confirm"
                errors={{
                  errors: errors.password_confirm,
                  touched: touched.password_confirm,
                }}
                type="password"
              />
              <button
                type="submit"
                className={`button bg-blue-500 w-full text-white mt-4 ${
                  !(isValid && dirty) ? "opacity-25 pointer-events-none" : null
                }`}
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterComponent;
