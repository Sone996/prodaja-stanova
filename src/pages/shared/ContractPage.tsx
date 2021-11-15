import { FC } from "react";
import { observer } from "mobx-react-lite";
import { RootStore } from "../../clientStore";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import InputAndLabel from "../../components/ui/InputAndLabel";
import SelectAndLabel from "../../components/ui/SelectAndLabel";
import {
  CustomerContractOptions,
  PaymentMethodEnum,
} from "../../constants/Constants";
import useFetchContract from "../../customHooks/contractHooks/useFetchContract";
import { useEditContractHook } from "../../customHooks/contractHooks/UseEditContractHook";
import { useQueryClient } from "react-query";
import { IEditContract, ILoggedUser } from "../../types/types";

const ProfileSchema = Yup.object().shape({
  price: Yup.string().required("Polje je obavezno"),
});

const ContractPage: FC = observer(() => {
  const loggedUser: ILoggedUser | undefined =
    useQueryClient().getQueryData("activeUser");
  const { saveFormsModule } = RootStore();
  const contract = useFetchContract(saveFormsModule.getIdsForContract);
  const makeContract = useEditContractHook();

  const sendData = (data: IEditContract) => {
    makeContract.mutate(data);
  };

  return (
    <div className="flex flex-col w-full p-4 text-gray-700">
      <div className="felx w-full mb-4 text-2xl">Detalji ugovora</div>
      <div className="felx w-1/2">
        {contract.isLoading ? (
          <div>loading</div>
        ) : contract.isError ? (
          <div>{contract.error.message}</div>
        ) : (
          <Formik
            initialValues={contract.data}
            onSubmit={(values) => sendData(values)}
            validationSchema={ProfileSchema}
          >
            {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
              <Form autoComplete="off">
                <SelectAndLabel
                  label="Način plaćanja"
                  value={values.payment_method}
                  options={PaymentMethodEnum}
                  onChange={(value: any) => {
                    setFieldValue("payment_method", value.value);
                  }}
                />
                <SelectAndLabel
                  label="Status"
                  value={values.status}
                  options={CustomerContractOptions}
                  onChange={(value: any) => {
                    setFieldValue("status", value.value);
                  }}
                />
                <div className="felx my-2">
                  {loggedUser?.role === "admin" ? (
                    <span>
                      {values.approved === true ? "Odobreno" : "Nije odobreno"}
                    </span>
                  ) : (
                    <label>
                      <Field type="checkbox" name="approved" />
                      {`${
                        values.approved === true ? "Odobreno" : "Nije odobreno"
                      }`}
                    </label>
                  )}
                </div>
                <div className="flex my-2">
                  <label>
                    <Field type="checkbox" name="signed" />
                    {`${
                      values.signed === true ? "Potpisano" : "Nije Potpisano"
                    }`}
                  </label>
                </div>
                <InputAndLabel
                  label="Cena"
                  name="price"
                  errors={{ errors: errors.price, touched: touched.price }}
                  type="number"
                />
                <InputAndLabel
                  label="Beleška"
                  name="note"
                  errors={null}
                  type="text"
                />
                <div className="flex justify-end mt-2">
                  <button
                    disabled={!(isValid && dirty)}
                    type="submit"
                    className={`button bg-blue-500 w-1/3 text-white mt-6 ${
                      !(isValid && dirty)
                        ? "opacity-25 pointer-events-none"
                        : null
                    }`}
                  >
                    Pošalji
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
});

export default ContractPage;
