import { FC, useState } from "react";
import { RootStore } from "../../clientStore";
import Select from "react-select";

const options = [
  { value: "admin", label: "Admin" },
  { value: "finance ", label: "Finansije" },
  { value: "salesman", label: "Prodavac" },
];

const NewUserModal: FC = () => {
  const { appStore } = RootStore();
  const [form, setForm] = useState({
    name: "",
    last_name: "",
    role: "",
    password: "",
  });

  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const cancel = () => {
    appStore.closeModal();
  };

  const completeCourse = () => {
    console.log(form);
  };

  const handleSelect = (val: any) => {
    setForm({ ...form, role: val.value });
  };

  return (
    <div
      id="new-user-modal"
      className="new-user-modal rounded-lg w-4/12 h-3/12 bg-white flex flex-col absolute text-gray-700 text-tiny felx items-center justify-center"
    >
      <div className="flex items-center justify-center w-full px-8 py-4">
        <span className="font-bold text-xl">Novi Korisnik</span>
      </div>
      <div className="flex flex-col w-full p-4 pt-0">
        <div className="flex flex-col justify-center">
          <span>Ime</span>
          <input
            className="input"
            type="text"
            name="name"
            value={form.name}
            data-test="loginEmail"
            onChange={inputHandler}
          />
        </div>
        <div className="flex flex-col justify-center">
          <span>Prezime</span>
          <input
            className="input"
            type="text"
            name="last_name"
            value={form.last_name}
            data-test="loginEmail"
            onChange={inputHandler}
          />
        </div>
        <div className="flex flex-col justify-center">
          <span>Rola</span>
          <Select
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => option.label}
            options={options}
            onChange={(option) => {
              handleSelect(option);
            }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <span>Lozinka</span>
          <input
            className="input"
            type="text"
            name="password"
            value={form.password}
            data-test="loginEmail"
            onChange={inputHandler}
          />
        </div>
        <div className="flex items-center justify-between w-full px-8 mt-4">
          <span
            onClick={cancel}
            className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
          >
            Cancel
          </span>
          <span
            onClick={completeCourse}
            className="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer text-white"
          >
            Potvrdi
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewUserModal;
