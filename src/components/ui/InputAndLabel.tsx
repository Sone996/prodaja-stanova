import { Field } from "formik";
import { FC } from "react";
import { IInputAndLabel } from "../../types/types";

const InputAndLabel: FC<IInputAndLabel> = ({ label, name, errors, type }) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <label htmlFor="username">{label}</label>
        {errors != null ? (
          errors.errors && errors.touched ? (
            <span className="ml-2 text-red">{errors.errors}</span>
          ) : null
        ) : null}
      </div>
      <Field
        autoComplete="new-password"
        className="input"
        type={type}
        name={name}
        data-test={`data_${name}`}
      />
    </div>
  );
};

export default InputAndLabel;
