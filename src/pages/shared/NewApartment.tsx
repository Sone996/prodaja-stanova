import { observer } from "mobx-react-lite";
import { FC, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import { RootStore } from "../../clientStore";
import { ISelectOption } from "../../types/types";

const defaultForm: any = {
  lamela: "",
  square: "",
  rooms: "",
  flor: "",
  orijentation: "",
  balcony: "",
  price: "",
  status: "",
  photo: "",
};

const statusOptions: ISelectOption[] = [
  { value: "availabel", label: "Dostupan" },
  { value: "sold", label: "Prodat" },
  { value: "reserved", label: "Rezervisan" },
];

const NewApartment: FC = observer(() => {
  const { saveFormsModule } = RootStore();
  const [form, setForm] = useState(defaultForm);
  const ref = useRef<any>(null);
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

  const addImage = () => {
    document.getElementById("selectedFile")!.click();
  };

  const getBase64 = (file: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setForm({
        ...form,
        photo: reader.result,
      });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  const uploadImage = () => {
    let file = ref.current.files[0];
    if (["image/jpeg", "image/jpg", "image/png"].indexOf(file.type) === -1) {
      console.log("pogresan format");
    } else if (file.size > 5242880) {
      console.log("prevelik fajl");
    } else {
      getBase64(file);
    }
  };

  const clearImage = () => {
    console.log('clear')
    setForm({
      ...form,
      photo: null,
    });
  };

  useEffect(() => {
    if (saveFormsModule.getEditApartment.price !== "") {
      console.log("imam podatke");
      console.log(saveFormsModule.getEditApartment);
      setForm({
        ...form,
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
    // eslint-disable-next-line
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
        <div className="flex flex-col w-1/2 border rounded-md px-4 pb-2 pt-6">
          <div className="flex flex-col justify-center items-center">
            <div
              className="lg:flex-shrink-0 h-64 w-96 bg-gray-100 bg-no-repeat bg-center bg-cover border"
              style={{ backgroundImage: `url(${form.photo})` }}
            ></div>
            <div className="flex flex-row flex-shrink-0 mt-4 items-center">
              <input
                type="file"
                ref={ref}
                id="selectedFile"
                style={{ display: "none" }}
                onChange={uploadImage}
              />
              <input
                type="button"
                className="text-tiny uppercase bg-theme-buttonGray px-2 cursor-pointer py-1 rounded-md"
                value="Dodaj fotografiju"
                onClick={addImage}
              />
              <i
                className="fa fa-times ml-1 text-xl inline-block text-theme-gray hover:text-theme-red cursor-pointer"
                aria-hidden="true"
                onClick={clearImage}
              />
            </div>
            {/* <span v-if="imageFileSizeError" className="text-theme-red text-xs">Morate izabrati sliku manju od 5 MB</span>
                    <span v-if="imageFileTypeError" className="text-theme-red text-xs">Morate izabrati sliku koja je tip jpg,jpeg ili png</span> */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewApartment;
