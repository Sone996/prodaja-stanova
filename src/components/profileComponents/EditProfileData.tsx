import { FC, useState } from "react";

const EditProfileData: FC<{ oldData: any }> = ({ oldData }) => {
  const [form, setForm] = useState(oldData);
  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const sendData = () => {
    console.log("form");
  };

  return (
    <>
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
        <div className="flex justify-end mt-2">
          <button
            className="button bg-blue-500 w-1/3 text-white"
            onClick={sendData}
          >
            Pošalji
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfileData;
