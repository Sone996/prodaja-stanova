import { FC } from "react";
import Select from "react-select";

const options = [
  { value: "admin", label: "Admin" },
  { value: "finance", label: "Finansije" },
  { value: "salesman", label: "Prodavac" },
];
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
        options={options}
        onChange={(option) => {
          handleSelect(option);
        }}
      />
      <Select
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        className="pl-6 w-1/4"
        placeholder="Rola"
        options={options}
        onChange={(option) => {
          handleSelect(option);
        }}
      />
    </div>
  );
};

export default ClientFilters;
