import { observer } from "mobx-react-lite";
import { FC, useRef, useState } from "react";
import { useHistory } from "react-router";
import { RootStore } from "../../clientStore";
import { IApartmenttt } from "../../types/types";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputAndLabel from "../../components/ui/InputAndLabel";
import SelectAndLabel from "../../components/ui/SelectAndLabel";
import { orijentationOptions, statusOptions } from "../../constants/Constants";
import { useAddNewApartmentHook } from "../../customHooks/apartmentHooks/useAddNewApartmentHook";
import { useEditApartmentHook } from "../../customHooks/apartmentHooks/useEditApartmentHook";

const defaultForm: IApartmenttt = {
  balconies: "",
  floor: "",
  lamella: "",
  orientation: "north",
  photo: null,
  price: "",
  rooms: "",
  square_footage: "",
};

const NewApartmentSchema = Yup.object().shape({
  lamella: Yup.string().required("Polje je obavezno"),
  square_footage: Yup.number()
    .min(1, "Potrebno je minimum 1 cifra")
    .required("Polje je obavezno"),
  rooms: Yup.number()
    .min(1, "Potrebna je barem jedna soba")
    .required("Polje je obavezno"),
  floor: Yup.number()
    .typeError("Uneti u ciframa")
    .required("Polje je obavezno"),
  balconies: Yup.number().required("Polje je obavezno"),
  price: Yup.number().required("Polje je obavezno"),
});

const NewApartment: FC = observer(() => {
  const { saveFormsModule } = RootStore();
  const [photo, setPhoto] = useState<any>(null);
  const ref = useRef<any>(null);
  const history = useHistory();
  const newApartment = useAddNewApartmentHook();
  const editApartment = useEditApartmentHook();

  const handleAddApartment = (data: any) => {
    if (photo) {
      data.photo = photo;
    }
    newApartment.mutate(data);
    history.push("/");
  };

  const handleEditApartment = (data: any) => {
    if (photo) {
      data.photo = photo;
    }
    console.log("editujem");
    editApartment.mutate(data);
    history.goBack();
  };

  const addImage = () => {
    document.getElementById("selectedFile")!.click();
  };

  const getBase64 = (file: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhoto(reader.result);
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
    console.log("clear");
    setPhoto(null);
  };

  return (
    <div className="flex flex-col w-full h-full px-4 py-2">
      <div className="flex">
        <span className="text-2xl">Novi Stan</span>
      </div>
      <div className="flex mt-2">
        <div className="flex flex-col w-1/2 border rounded-md px-4 pb-2">
          <Formik
            initialValues={
              saveFormsModule.getEditApartment.price !== ""
                ? saveFormsModule.getEditApartment
                : defaultForm
            }
            onSubmit={(values) => {
              saveFormsModule.getEditApartment.price !== ""
                ? handleEditApartment(values)
                : handleAddApartment(values);
            }}
            validationSchema={NewApartmentSchema}
          >
            {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
              <Form autoComplete="off">
                <InputAndLabel
                  label="Lamela"
                  name="lamella"
                  errors={{ errors: errors.lamella, touched: touched.lamella }}
                  type="string"
                />
                <InputAndLabel
                  label="Kvadratura"
                  name="square_footage"
                  errors={{
                    errors: errors.square_footage,
                    touched: touched.square_footage,
                  }}
                  type="number"
                />
                <InputAndLabel
                  label="Broj soba"
                  name="rooms"
                  errors={{ errors: errors.rooms, touched: touched.rooms }}
                  type="number"
                />
                <InputAndLabel
                  label="Sprat"
                  name="floor"
                  errors={{ errors: errors.floor, touched: touched.floor }}
                  type="number"
                />
                <SelectAndLabel
                  label="Orijentacija"
                  value={values.orientation}
                  options={orijentationOptions}
                  onChange={(value: any) => {
                    setFieldValue("orientation", value.value);
                  }}
                />
                <InputAndLabel
                  label="Broj terasa"
                  name="balconies"
                  errors={{
                    errors: errors.balconies,
                    touched: touched.balconies,
                  }}
                  type="number"
                />
                <InputAndLabel
                  label="Cena"
                  name="price"
                  errors={{ errors: errors.price, touched: touched.price }}
                  type="number"
                />
                <div className="flex justify-end mt-2">
                  <button
                    className={`button bg-blue-500 w-1/3 text-white font-bold items-center ${
                      !(isValid && dirty)
                        ? "opacity-25 pointer-events-none"
                        : null
                    }`}
                    type="submit"
                  >
                    {saveFormsModule.getEditApartment.price !== ""
                      ? "Izmeni stan"
                      : "Dodaj Stan"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex flex-col w-1/2 border rounded-md px-4 pb-2 pt-6">
          <div className="flex flex-col justify-center items-center">
            <div
              className="lg:flex-shrink-0 h-64 w-96 bg-gray-100 bg-no-repeat bg-center bg-cover border"
              style={{ backgroundImage: `url(${photo})` }}
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
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewApartment;
