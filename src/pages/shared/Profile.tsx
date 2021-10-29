import { FC, useState } from "react";

const oldData = {
  name: "Ime",
  last_name: "Prezime",
  username: "medeniCar",
  password: "medeni123",
  repeatPassword: "medeni123",
};
const Profile: FC = () => {
  const [form, setForm] = useState(oldData);
  const [isEdit, setIsEdit] = useState(false);

  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const sendData = () => {
    console.log(form);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center pl-6 py-2">
        <span className="text-2xl">Ime Prezime</span>
      </div>
      <div className="border rounded-md w-1/2 ml-6 px-6 py-2">
        <div className="flex flex-col justify-center mt-2">
          <span>Ime</span>
          <input
            className="input"
            type="text"
            name="name"
            value={form.name}
            data-test="editName"
            onChange={inputLoginHandler}
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <span>Prezime</span>
          <input
            className="input"
            type="text"
            name="lastName"
            value={form.last_name}
            data-test="editLastName"
            onChange={inputLoginHandler}
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <span>Korisničko ime</span>
          <input
            className="input"
            type="text"
            autoComplete="off"
            name="username"
            value={form.username}
            data-test="editUsername"
            onChange={inputLoginHandler}
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <span>Lozinka</span>
          {isEdit ? (
            <>
              <input
                className="input"
                type="password"
                name="password"
                value={form.password}
                data-test="password"
                onChange={inputLoginHandler}
              />
              <div className="flex flex-col justify-center mt-2">
                <span>Ponovi lozinku</span>
                <input
                  className="input"
                  type="password"
                  name="repeatPassword"
                  value={form.repeatPassword}
                  data-test="repeatPassword"
                  onChange={inputLoginHandler}
                />
              </div>
            </>
          ) : (
            <span className="">{form.password}</span>
          )}
        </div>
        <div className="flex justify-between mt-2">
          <button
            className="button bg-blue-500 w-1/3 text-white"
            onClick={toggleEdit}
          >
            {isEdit ? "Odustani" : "Izmeni"}
          </button>
          {isEdit ? (
            <button
              className="button bg-blue-500 w-1/3 text-white"
              onClick={sendData}
            >
              Pošalji
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
