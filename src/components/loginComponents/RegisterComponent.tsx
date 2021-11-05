import { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { IRegister } from "../../types/types";
import InputAndLabel from "../ui/InputAndLabel";

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
  //   const [loginForm, setLoginForm] = useState(loginFormDefault);
  //   const useLogin = LoginHook();

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

  const registerAction = (data: any) => {
    console.log(data);
    // registerMutation.mutate(registerForm);
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
          {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
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
      {/* <div className="flex flex-col justify-center mt-4">
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
      </div> */}
    </>
  );
};

export default RegisterComponent;
