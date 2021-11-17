import { FC } from "react";
import { IBasicClient } from "../../types/types";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import SelectAndLabel from "../ui/SelectAndLabel";
import InputAndLabel from "../ui/InputAndLabel";
import { TypeOfClientOptions } from "../../constants/Constants";
import { useNewClientHook } from "../../customHooks/ClientHooks/useCreateClientHook";

const defaultForm: IBasicClient = {
  type: "individual",
  name: "",
  email: "",
  phone: "",
  pib_jmbg: "",
  address: "",
};

const NewClientSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Potrebno je 4 - 30 karaktera")
    .max(30, "Potrebno je 4 - 30 karaktera")
    .required("Polje je obavezno"),
  email: Yup.string().email("Porešan format").required("Polje je obavezno"),
  phone: Yup.number()
    .min(8, "Potrebno je minimum 9 cifara")
    .required("Polje je obavezno"),
  pib_jmbg: Yup.number().required("Polje je obavezno"),
  address: Yup.string()
    .min(4, "Potrebno je minimum 4 karaktera")
    .required("Polje je obavezno"),
});

const NewClientComponent: FC<{ cancel: any }> = ({ cancel }) => {
  const createClient = useNewClientHook();

  const sendData = (data: IBasicClient) => {
    createClient.mutate(data);
    cancel();
  };

  return (
    <div className="flex flex-col">
      <Formik
        initialValues={defaultForm}
        onSubmit={(values) => sendData(values)}
        validationSchema={NewClientSchema}
      >
        {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
          <Form autoComplete="off">
            <SelectAndLabel
              label="Fizičko/pravno lice"
              value={values.type}
              options={TypeOfClientOptions}
              onChange={(value: any) => {
                setFieldValue("type", value.value);
              }}
            />
            <InputAndLabel
              label="Ime i Prezime / Naziv"
              name="name"
              errors={{
                errors: errors.name,
                touched: touched.name,
              }}
              type="text"
            />
            <InputAndLabel
              label="E-mail"
              name="email"
              errors={{
                errors: errors.email,
                touched: touched.email,
              }}
              type="text"
            />
            <InputAndLabel
              label="Br. phoneefona"
              name="phone"
              errors={{
                errors: errors.phone,
                touched: touched.phone,
              }}
              type="text"
            />
            <InputAndLabel
              label="PIB / JMBG"
              name="pib_jmbg"
              errors={{
                errors: errors.pib_jmbg,
                touched: touched.pib_jmbg,
              }}
              type="text"
            />
            <InputAndLabel
              label="Adresa"
              name="address"
              errors={{
                errors: errors.address,
                touched: touched.address,
              }}
              type="text"
            />
            <div className="flex items-center justify-between w-full px-8 mt-4">
              <span
                onClick={cancel}
                className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
              >
                Cancel
              </span>
              <button
                type="submit"
                className={`button bg-blue-500 py-2 px-4 rounded-lg text-white ${
                  !(isValid && dirty) ? "opacity-25 pointer-events-none" : null
                }`}
              >
                Potvrdi
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewClientComponent;
