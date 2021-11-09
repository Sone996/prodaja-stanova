import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { RootStore } from "../../clientStore";
import { statusOptions } from "../../constants/Constants";
import Select from "react-select";

const filtersDefault = {
  square_footage: "",
  status: "",
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
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        isClearable
        className="mx-2 w-1/4"
        placeholder="Status"
        options={statusOptions}
        onChange={(option) => {
          handleSelect(option);
        }}
      />

      {/* <Formik
        initialValues={
          filtersModule.getApartmentFilters.status ||
          filtersModule.getApartmentFilters.square_footage
            ? filtersModule.getApartmentFilters
            : filtersDefault
        }
        onSubmit={(values) => setFilters(values)}
      >
        {({ values, setFieldValue }) => (
          <Form style={{ width: "620px" }}>
            <div className="flex justify-between">
              <InputAndLabel
                label="Kvadratura"
                name="square_footage"
                errors={null}
                type="text"
              />
              <SelectAndLabel
                style={{ width: "300px" }}
                label="Status"
                value={values.status}
                options={statusOptions}
                onChange={(value: any) => {
                  setFieldValue("status", value.value);
                }}
              />
              {/* <div className="flex justify-end mt-2"> */}
      {/* <button
        className="button bg-blue-500 w-1/3 text-white font-bold items-center"
        type="submit"
      >
        Pretraži
      </button> */}
      {/* </div> */}
      {/*  </div>
          </Form>
        )}
      </Formik> */}

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
