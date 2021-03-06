import { Form, Formik } from "formik";
import { FC } from "react";
import InputAndLabel from "../ui/InputAndLabel";
import SelectAndLabel from "../ui/SelectAndLabel";
import { PaymentMethodEnum } from "../../constants/Constants";
import { RootStore } from "../../clientStore";
import { useQueryClient } from "react-query";
import { IApartment, IPreContract } from "../../types/types";
import { usePreContractHook } from "../../customHooks/contractHooks/usePreContractHook";

const AddContractModal: FC = () => {
  const apartment: IApartment | undefined =
    useQueryClient().getQueryData("apartment");
  const makeContract = usePreContractHook();
  const { appStore } = RootStore();
  const defaultForm: { payment_method: string; note: string } = {
    payment_method: "cash",
    note: "",
  };

  const addContract = (values: { payment_method: string; note: string }) => {
    let form: IPreContract = {
      apartment_id: apartment ? apartment.id : 0,
      customer_id: appStore.getModal.data,
      data: { ...values },
    };
    makeContract.mutate(form);
    cancel();
  };

  const cancel = () => {
    appStore.closeModal();
  };

  return (
    <div
      id="add-contract-modal"
      className="add-contract-modal rounded-lg w-4/12 h-3/12 bg-white flex flex-col absolute text-gray-700 text-tiny felx items-center justify-center"
    >
      <div className="flex items-center justify-center w-full px-8 py-4">
        <span className="font-bold text-xl">Detalji Predugovor</span>
      </div>
      <div className="flex flex-col w-full p-4 pt-0">
        <div className="flex mt-2">
          <span className="mr-2">Status:</span>
          <span className="font-semibold">Rezervacija</span>
        </div>
        <div className="flex pt-2">
          <span className="mr-2">Kvadratura:</span>
          <span className="font-semibold">{apartment?.square_footage}</span>
        </div>
        <div className="flex pt-2 mb-2">
          <span className="mr-2">Cena:</span>
          <span className="font-semibold">{apartment?.price}</span>
        </div>
        <Formik
          initialValues={defaultForm}
          onSubmit={(values) => {
            addContract(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form autoComplete="off">
              <SelectAndLabel
                label="Na??in pla??anja"
                value={values.payment_method}
                options={PaymentMethodEnum}
                onChange={(value: any) => {
                  setFieldValue("role", value.value);
                }}
              />
              <InputAndLabel
                label="Bele??ka"
                name="note"
                errors={null}
                type="text"
              />
              <div className="flex items-center justify-between w-full mt-4">
                <span
                  onClick={cancel}
                  className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
                >
                  Cancel
                </span>
                <button
                  type="submit"
                  className={`button bg-blue-500 py-2 px-4 rounded-lg text-white`}
                >
                  Napravi
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddContractModal;
