import { FC, useState } from "react";
import { RootStore } from "../../clientStore";
import NewClientComponent from "../clientComponents/NewClientComponent";

const AddNewClientModal: FC = () => {
  const { appStore } = RootStore();
  const [form, setForm] = useState({
    comment: "",
    mark: "",
    personId: 1,
  });

  // eslint-disable-next-line
  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      id="add-new-client-modal"
      className="add-new-client-modal rounded-lg w-4/12 h-3/12 bg-white flex flex-col absolute text-gray-700 text-tiny felx items-center justify-center"
    >
      <div className="flex items-center justify-center w-full px-8 py-4">
        <span className="font-bold text-xl">Novi Klijent</span>
      </div>
      <div className="flex flex-col w-full p-4 pt-0">
        <NewClientComponent cancel={() => appStore.closeModal()} />
      </div>
    </div>
  );
};

export default AddNewClientModal;
