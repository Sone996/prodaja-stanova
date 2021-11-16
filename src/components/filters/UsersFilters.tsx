import { FC, useState } from "react";
import Select from "react-select";
import { RootStore } from "../../clientStore";
import { roleOptions } from "../../constants/Constants";
import { ISelectOption } from "../../types/types";

const defaultValue = (options: ISelectOption[], value: string) => {
  return options
    ? options.find((option: ISelectOption) => option.value === value)
    : "";
};

const UsersFilters: FC = () => {
  const { filtersModule } = RootStore();
  const [form, setForm] = useState(filtersModule.getUserFilters);
  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (val: any) => {
    setForm({ ...form, role: val === null ? "" : val.value });
  };

  const setFilters = () => {
    filtersModule.setUserFilters(form);
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
        value={defaultValue(roleOptions, form.role)}
        className="mx-2 w-1/4"
        placeholder="Rola..."
        options={roleOptions}
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

export default UsersFilters;
