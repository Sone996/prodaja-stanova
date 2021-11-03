import { FC, useState } from "react";
import Select from "react-select";
import { IBasicClient } from "../../types/types";

const defaultForm: IBasicClient = {
  type: "",
  name: "",
  email: "",
  tel: "",
  pib_jmbg: "",
  adress: "",
  date_of_visit: "",
  status: "potential",
  note: "",
};

const options = [
  { value: "fizicko", label: "Fizičko lice" },
  { value: "pravno", label: "Pravno lice" },
];

// STATUS SE AUTOMATSKI STAVLJE JER OVDE NEMA DODAVANJA UGOVORA

const NewClientComponent: FC<{ cancel: any }> = ({ cancel }) => {
  const [form, setForm] = useState<IBasicClient>(defaultForm);

  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleFirstSelect = (val: any) => {
    setForm({ ...form, type: val.value });
  };

  const sendData = () => {
    console.log(form);
  };

  return (
    <div className="flex flex-col">
      <span>Fizičko/pravno lice</span>
      <Select
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        options={options}
        onChange={(option) => {
          handleFirstSelect(option);
        }}
      />
      <span>Ime i Prezime / Naziv</span>
      <input
        className="input"
        type="text"
        name="name"
        value={form.name}
        data-test="loginEmail"
        onChange={inputHandler}
      />
      <span>E-mail</span>
      <input
        className="input"
        type="text"
        name="email"
        value={form.email}
        data-test="loginEmail"
        onChange={inputHandler}
      />
      <span>Br. Telefona</span>
      <input
        className="input"
        type="text"
        name="tel"
        value={form.tel}
        data-test="loginEmail"
        onChange={inputHandler}
      />
      <span>PIB/JMBG</span>
      <input
        className="input"
        type="text"
        name="pib_jmbg"
        value={form.pib_jmbg}
        data-test="loginEmail"
        onChange={inputHandler}
      />
      <span>Adresa</span>
      <input
        className="input"
        type="text"
        name="adress"
        value={form.adress}
        data-test="loginEmail"
        onChange={inputHandler}
      />
      <span>Datum Prve Posete</span>
      <input
        className="input"
        type="text"
        name="date_of_visit"
        value={form.date_of_visit}
        data-test="loginEmail"
        onChange={inputHandler}
      />
      <span>Napomena</span>
      <textarea
        value={form.note}
        onChange={inputHandler}
        name="note"
        className="border resize-none w-full rounded p-3"
        placeholder="Your ocmment"
      />
      <div className="flex items-center justify-between w-full px-8 mt-2">
        <span
          onClick={cancel}
          className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
        >
          Cancel
        </span>
        <span
          onClick={sendData}
          className="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer text-white"
        >
          Send
        </span>
      </div>
    </div>
  );
};

export default NewClientComponent;