import { FC } from "react";
import Select from "react-select";

const defaultValue = (options: any, value: any) => {
  return options ? options.find((option: any) => option.value === value) : "";
};

const SelectAndLabel: FC<any> = ({ label, onChange, options, value }) => {
  return (
    <div>
        <span>{label}</span>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value);
        }}
        options={options}
      />
    </div>
  );
};

export default SelectAndLabel;
