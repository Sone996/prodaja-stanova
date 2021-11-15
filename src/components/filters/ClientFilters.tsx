import { FC, useState } from "react";
import Select from "react-select";
import { RootStore } from "../../clientStore";
import { TypeOfClientOptions } from "../../constants/Constants";
import { ISelectOption } from "../../types/types";

const defaultValue = (options: ISelectOption[], value: string) => {
  return options ? options.find((option: ISelectOption) => option.value === value) : "";
};

const ClientFilters: FC = () => {
  const { filtersModule } = RootStore();
  const [form, setForm] = useState(filtersModule.getClientFilters);

  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (val: any) => {
    setForm({ ...form, type: val === null ? "" : val.value });
  };

  const setFilters = () => {
    filtersModule.setClientFilters(form);
  };

  return (
    <div className="flex py-2 w-3/4 justify-between">
      <input
        type="text"
        autoComplete="off"
        className="input"
        name="id"
        placeholder="Id..."
        value={form.id}
        onChange={inputLoginHandler}
      />
      <Select
        isClearable
        value={defaultValue(TypeOfClientOptions, form.type)}
        className="mx-2 w-1/4"
        placeholder="Tip..."
        options={TypeOfClientOptions}
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
};

export default ClientFilters;
