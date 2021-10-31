import { FC, useState } from "react";
import { useHistory } from "react-router";

const defaultForm = {
  lamela: "",
  square: "",
  rooms: "",
  flor: "",
  orijentation: "",
  balcony: "",
  price: "",
  status: "",
};

const NewApartment: FC = () => {
  const [form, setForm] = useState(defaultForm);
  const history = useHistory();

  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddApartment = () => {
    console.log(form);
    setForm(defaultForm);
    history.push("/");
  };

  return (
    <div className="flex flex-col w-full h-full px-4 py-2">
      <div className="flex">
        <span className="text-2xl">Novi Stan</span>
      </div>
      <div className="flex mt-2">
        <div className="flex flex-col w-1/2 border rounded-md px-4 pb-2">
          <span>Lamela</span>
          <input
            className="input"
            type="text"
            name="lamela"
            data-test="lamela"
            value={form.lamela}
            onChange={inputLoginHandler}
          />
          <span>Kvadratura</span>
          <input
            className="input"
            type="number"
            name="square"
            data-test="square"
            value={form.square}
            onChange={inputLoginHandler}
          />
          <span>Broj soba</span>
          <input
            className="input"
            type="number"
            name="rooms"
            data-test="rooms"
            value={form.rooms}
            onChange={inputLoginHandler}
          />
          <span>Sprat</span>
          <input
            className="input"
            type="number"
            name="flor"
            data-test="flor"
            value={form.flor}
            onChange={inputLoginHandler}
          />
          <span>Orijentacija</span>
          <input
            className="input"
            type="text"
            name="orijentation"
            data-test="orijentation"
            value={form.orijentation}
            onChange={inputLoginHandler}
          />
          <span>Broj terasa</span>
          <input
            className="input"
            type="number"
            name="balcony"
            data-test="balcony"
            value={form.balcony}
            onChange={inputLoginHandler}
          />
          <span>Cena</span>
          <input
            className="input"
            type="number"
            name="price"
            data-test="price"
            value={form.price}
            onChange={inputLoginHandler}
          />
          <span>Status</span>
          <input
            className="input"
            type="text"
            name="status"
            data-test="apartmentStatus"
            value={form.status}
            onChange={inputLoginHandler}
          />
          <div className="flex justify-end mt-2">
            <button
              className="button bg-blue-500 w-1/3 text-white font-bold items-center"
              onClick={handleAddApartment}
            >
              Dodaj Stan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewApartment;
