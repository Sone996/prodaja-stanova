import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { RootStore } from "../../clientStore";
import { statusOptions } from "../../constants/Constants";
import Select from "react-select";
import { ISelectOption } from "../../types/types";

const defaultValue = (options: ISelectOption[], value: string) => {
  return options
    ? options.find((option: ISelectOption) => option.value === value)
    : "";
};

const ApartmentsFilters: FC = observer(() => {
  const { filtersModule } = RootStore();
  const [form, setForm] = useState(filtersModule.getApartmentFilters);

  const sortPrice = () => {
    filtersModule.setApartmentSortByPrice(
      !filtersModule.getApartmentSortByPrice
    );
  };

  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (val: any) => {
    console.log(val)
    setForm({ ...form, status: val === null ? "" : val.value });
  };

  const setFilters = () => {
    filtersModule.setApartmentFilters(form);
  };

  return (
    <div className="flex py-2 justify-between">
      <button
        className="button text-gray-700 border border-gray-700"
        onClick={sortPrice}
      >
        Sortiraj po ceni <i className="fa fa-sort ml-2" aria-hidden="true"></i>
      </button>
      <input
        type="text"
        autoComplete="off"
        className="input"
        name="square_footage"
        placeholder="Kvadratura..."
        value={form.square_footage}
        onChange={inputLoginHandler}
      />
      <Select
        isClearable
        value={defaultValue(statusOptions, form.status)}
        className="mx-2 w-1/4"
        placeholder="Status"
        options={statusOptions}
        onChange={(option) => {
          handleSelect(option);
        }}
      />
      <button
        className="button bg-blue-500 w-1/4 text-white font-bold items-center"
        onClick={setFilters}
      >
        Pretraži
      </button>
    </div>
  );
});

export default ApartmentsFilters;
