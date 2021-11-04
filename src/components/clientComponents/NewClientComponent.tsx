import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import { IBasicClient } from "../../types/types";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import SelectAndLabel from "../ui/SelectAndLabel";
import InputAndLabel from "../ui/InputAndLabel";

const defaultForm: IBasicClient = {
  type: "fizicko",
  name: "",
  email: "",
  tel: "",
  pib_jmbg: "",
  adress: "",
  date_of_visit: null,
  status: "potential",
  note: "",
};

const options = [
  { value: "fizicko", label: "Fizičko lice" },
  { value: "pravno", label: "Pravno lice" },
];

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Potrebno je 4 - 30 karaktera")
    .max(30, "Potrebno je 4 - 30 karaktera")
    .required("Polje je obavezno"),
  email: Yup.string().email("Porešan format").required("Polje je obavezno"),
  tel: Yup.number()
    .min(8, "Potrebno je 8 - 9 cifara")
    .max(9, "Potrebno je 8 - 9 cifara")
    .required("Polje je obavezno"),
  pib_jmbg: Yup.number().required("Polje je obavezno"),
  adress: Yup.string()
    .min(4, "Potrebno je 4 - 15 karaktera")
    .max(15, "Potrebno je 4 - 15 karaktera")
    .required("Polje je obavezno"),
  // date_of_visit: Yup.string().required("Polje je obavezno"),
});

// STATUS SE AUTOMATSKI STAVLJE JER OVDE NEMA DODAVANJA UGOVORA

const NewClientComponent: FC<{ cancel: any }> = ({ cancel }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const sendData = (data: any) => {
    console.log(data);
  };

  const setDate = (date: Date) => {
    return date ? DateTime.fromJSDate(date).toFormat("yyyy-LL-dd") : null;
  };

  return (
    <div className="flex flex-col">
      <Formik
        initialValues={defaultForm}
        onSubmit={(values) => sendData(values)}
        validationSchema={LoginSchema}
      >
        {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
          <Form autoComplete="off">
            <SelectAndLabel
              label="Fizičko/pravno lice"
              value={values.type}
              options={options}
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
              label="Br. telefona"
              name="tel"
              errors={{
                errors: errors.tel,
                touched: touched.tel,
              }}
              type="number"
            />
            <InputAndLabel
              label="PIB / JMBG"
              name="pib_jmbg"
              errors={{
                errors: errors.pib_jmbg,
                touched: touched.pib_jmbg,
              }}
              type="number"
            />
            <InputAndLabel
              label="Adresa"
              name="adress"
              errors={{
                errors: errors.adress,
                touched: touched.adress,
              }}
              type="text"
            />
            <span>Datum Prve posete</span>
            <DatePicker
              className="w-3/4 border rounded py-2 border-gray-300 text-center text-gray-700"
              selected={startDate}
              dateFormat="dd.MM.yyyy"
              isClearable
              onChange={(date: Date) => {
                setFieldValue("date_of_visit", setDate(date));
              }}
            />
            <InputAndLabel
              label="Napomena"
              name="note"
              errors={null}
              type="text"
            />
            <div className="flex items-center justify-between w-full px-8 mt-2">
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
