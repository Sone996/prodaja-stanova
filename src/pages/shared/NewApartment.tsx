import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import { RootStore } from "../../clientStore";
import { ISelectOption } from "../../types/types";

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

const statusOptions: ISelectOption[] = [
  { value: "availabel", label: "Dostupan" },
  { value: "sold", label: "Prodat" },
  { value: "reserved", label: "Rezervisan" },
];

const NewApartment: FC = observer(() => {
  const { saveFormsModule } = RootStore();
  const [form, setForm] = useState(defaultForm);
  const history = useHistory();

  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (val: ISelectOption | null) => {
    if (val != null) {
      setForm({
        ...form,
        status: val.value,
      });
    }
  };

  const handleAddApartment = () => {
    console.log(form);
    setForm(defaultForm);
    history.push("/");
  };

  const handleEditApartment = () => {
    console.log("edit: ", form);
  };

  useEffect(() => {
    if (saveFormsModule.getEditApartment.price !== "") {
      console.log("imam podatke");
      console.log(saveFormsModule.getEditApartment);
      setForm({
        lamela: saveFormsModule.getEditApartment.lamela,
        square: saveFormsModule.getEditApartment.square,
        rooms: saveFormsModule.getEditApartment.rooms,
        flor: saveFormsModule.getEditApartment.flor,
        orijentation: saveFormsModule.getEditApartment.orijentation,
        balcony: saveFormsModule.getEditApartment.balcony,
        price: saveFormsModule.getEditApartment.price,
        status: saveFormsModule.getEditApartment.status,
      });
    }
  }, [saveFormsModule]);

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
          <span>Status</span>
          <Select
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => option.label}
            value={statusOptions[0]}
            options={statusOptions}
            onChange={(option: ISelectOption | null) => {
              handleSelect(option);
            }}
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
          <div className="flex justify-end mt-2">
            <button
              className="button bg-blue-500 w-1/3 text-white font-bold items-center"
              onClick={
                saveFormsModule.getEditApartment.price !== ""
                  ? handleEditApartment
                  : handleAddApartment
              }
            >
              {saveFormsModule.getEditApartment.price !== ""
                ? "Izmeni stan"
                : "Dodaj Stan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewApartment;
