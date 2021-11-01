import { FC, useEffect, useState } from "react";
import { RootStore } from "../../clientStore";
import Select from "react-select";
import { observer } from "mobx-react-lite";

const options = [
  { value: "admin", label: "Admin" },
  { value: "finance", label: "Finansije" },
  { value: "salesman", label: "Prodavac" },
];

const NewUserModal: FC = observer(() => {
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

  const createUser = () => {
    console.log(form);
  };

  const editUser = () => {
    // id ide u url, a password ako je prazan trim?
    console.log(form)
  }

  const handleSelect = (val: any) => {
    setForm({ ...form, role: val.value });
  };

  useEffect(() => {
    if (appStore.getModal.data) {
      setForm({
        ...form,
        name: appStore.getModal.data.name,
        last_name: appStore.getModal.data.last_name,
        role: appStore.getModal.data.role,
      });
    }
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
            value={options[2]}
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
            onClick={appStore.getModal.data ? editUser : createUser}
            className="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer text-white"
          >
            {appStore.getModal.data ? 'Izmeni' : 'Potvrdi'}
          </span>
        </div>
      </div>
    </div>
  );
});

export default NewUserModal;
