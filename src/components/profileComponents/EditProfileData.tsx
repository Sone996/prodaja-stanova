import { FC } from "react";
import { ILoggedUser, INewUserModal } from "../../types/types";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputAndLabel from "../ui/InputAndLabel";
import { useEditUserHook } from "../../customHooks/UserHooks/useEditUserHook";

const ProfileSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(4, "Potrebno je 4 - 30 karaktera")
    .max(30, "Potrebno je 4 - 30 karaktera")
    .required("Polje je obavezno"),
  last_name: Yup.string()
    .min(4, "Potrebno je 4 - 30 karaktera")
    .max(30, "Potrebno je 4 - 30 karaktera")
    .required("Polje je obavezno"),
  username: Yup.string()
    .min(4, "Potrebno je 4 - 30 karaktera")
    .max(30, "Potrebno je 4 - 30 karaktera")
    .required("Polje je obavezno"),
  password: Yup.string().required("Polje je obavezno"),
});

const EditProfileData: FC<{ oldData: ILoggedUser; toggleEdit: () => void }> = ({
  oldData,
  toggleEdit,
}) => {
  const editUser = useEditUserHook();
  const defaultForm = {
    first_name: oldData.first_name,
    last_name: oldData.last_name,
    username: oldData.username,
    password: "",
    password_confirm: "",
    id: oldData.id,
    role: oldData.role,
  };

  const sendData = (data: INewUserModal) => {
    editUser.mutate(data);
    toggleEdit();
  };

  return (
    <div className="flex flex-col justify-center">
      <Formik
        initialValues={defaultForm}
        onSubmit={(values) => sendData(values)}
        validationSchema={ProfileSchema}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
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
              label="Prezime"
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
              errors={{
                errors: errors.username,
                touched: touched.username,
              }}
              type="text"
            />
            <InputAndLabel
              label="Lozinka"
              name="password"
              errors={{
                errors: errors.password,
                touched: touched.password,
              }}
              type="password"
            />
            <InputAndLabel
              label="Ponovi lozinku"
              name="password_confirm"
              errors={{
                errors: errors.password,
                touched: touched.password,
              }}
              type="password"
            />
            <div className="flex justify-end mt-2">
              <button
                disabled={!(isValid && dirty)}
                type="submit"
                className={`button bg-blue-500 w-1/3 text-white mt-6 ${
                  !(isValid && dirty) ? "opacity-25 pointer-events-none" : null
                }`}
              >
                Pošalji
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfileData;
