import { FC } from "react";
import Select from "react-select";
import { ISelectOption } from "../../types/types";

const defaultValue = (options: ISelectOption[], value: string) => {
  return options
    ? options.find((option: ISelectOption) => option.value === value)
    : "";
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
