import { FC, useEffect, useState } from "react";
import { RootStore } from "../../clientStore";
import { observer } from "mobx-react-lite";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputAndLabel from "../ui/InputAndLabel";
import SelectAndLabel from "../ui/SelectAndLabel";
import { INewUserModal } from "../../types/types";
import { roleOptions } from "../../constants/Constants";
import { NewUserHook } from "../../customHooks/UserHooks/NewUserHook";
import { EditUserHook } from "../../customHooks/UserHooks/EditUserHook";
import { DeleteUserHook } from "../../customHooks/UserHooks/DeleteUserHook";

const defaultForm: INewUserModal = {
  first_name: "",
  last_name: "",
  role: "salesman",
  username: "",
  password: "",
};

const NewUserSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(4, "Potrebno je 4 - 30 karaktera")
    .max(30, "Potrebno je 4 - 30 karaktera")
    .required("Polje je obavezno"),
  last_name: Yup.string()
    .min(4, "Potrebno je 4 - 15 karaktera")
    .max(15, "Potrebno je 4 - 15 karaktera")
    .required("Polje je obavezno"),
  password: Yup.string()
    .min(4, "Potrebno je 4 - 15 karaktera")
    .max(15, "Potrebno je 4 - 15 karaktera")
    .required("Polje je obavezno"),
  username: Yup.string()
    .min(4, "Potrebno je 4 - 15 karaktera")
    .max(15, "Potrebno je 4 - 15 karaktera")
    .required("Polje je obavezno"),
});

const NewUserModal: FC = observer(() => {
  const newUser = NewUserHook();
  const editUser = EditUserHook();
  const deleteUser = DeleteUserHook();
  const { appStore } = RootStore();
  const [form, setForm] = useState(defaultForm);

  const cancel = () => {
    appStore.closeModal();
  };

  const createUserHandler = (values: INewUserModal) => {
    newUser.mutate(values);
  };

  const editUserHandler = (values: INewUserModal) => {
    editUser.mutate(values);
  };

  const deleteUserHandler = (id: number) => {
    deleteUser.mutate(id);
  };

  useEffect(() => {
    if (appStore.getModal.data) {
      setForm({
        ...form,
        first_name: appStore.getModal.data.first_name,
        last_name: appStore.getModal.data.last_name,
        username: appStore.getModal.data.username,
        role: appStore.getModal.data.role,
        password: "",
      });
    }
    // eslint-disable-next-line
  }, [appStore]);

  return (
    <div
      id="new-user-modal"
      className="new-user-modal rounded-lg w-4/12 h-3/12 bg-white flex flex-col absolute text-gray-700 text-tiny felx items-center justify-center"
    >
      <div className="flex items-center justify-center w-full px-8 py-4">
        <span className="font-bold text-xl">Novi Korisnik</span>
      </div>
      <div className="flex flex-col w-full p-4 pt-0">
        <Formik
          initialValues={
            appStore.getModal.data ? appStore.getModal.data : defaultForm
          }
          onSubmit={(values) => {
            appStore.getModal.data
              ? editUserHandler(values)
              : createUserHandler(values);
          }}
          validationSchema={NewUserSchema}
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
                label="Prezim"
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
              <SelectAndLabel
                label="Uloga"
                value={values.role}
                options={roleOptions}
                onChange={(value: any) => {
                  setFieldValue("role", value.value);
                }}
              />
              <InputAndLabel
                label="Lozinka"
                name="password"
                errors={{ errors: errors.password, touched: touched.password }}
                type="text"
              />
              <div className="flex items-center justify-between w-full mt-4">
                <span
                  onClick={cancel}
                  className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
                >
                  Cancel
                </span>
                {appStore.getModal.data && (
                  <span
                    onClick={() => deleteUserHandler(values.id)}
                    className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
                  >
                    Obriši
                  </span>
                )}
                <button
                  type="submit"
                  className={`button bg-blue-500 py-2 px-4 rounded-lg text-white ${
                    !(isValid && dirty)
                      ? "opacity-25 pointer-events-none"
                      : null
                  }`}
                >
                  {appStore.getModal.data ? "Izmeni" : "Potvrdi"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
});

export default NewUserModal;
