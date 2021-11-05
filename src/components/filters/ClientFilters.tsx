import { FC } from "react";
import Select from "react-select";
import { roleOptions } from "../../constants/Constants";

const ClientFilters: FC = () => {
  const handleSelect = (val: any) => {
    // setForm({ ...form, role: val.value });
    console.log(val);
  };

  return (
    <div className="flex w-3/4 py-2">
      <Select
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        className="w-1/4"
        placeholder="Sortiraj po"
        options={roleOptions}
        onChange={(option) => {
          handleSelect(option);
        }}
      />
      <Select
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        className="pl-6 w-1/4"
        placeholder="Rola"
        options={roleOptions}
        onChange={(option) => {
          handleSelect(option);
        }}
      />
    </div>
  );
};

export default ClientFilters;
