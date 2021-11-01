import { FC, useState } from "react";
import { RootStore } from "../../clientStore";

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

  const cancel = () => {
    appStore.closeModal();
  };

  const completeCourse = () => {
    // personStore
    //   .completeCourse(form)
    //   .then((res) => {
    //     console.log(res);
    //     cancel();
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data.errors);
    //     cancel();
    //   });
  };

  return (
    <div
      id="add-new-client-modal"
      className="add-new-client-modal rounded-lg w-4/12 h-3/12 bg-white flex flex-col absolute text-gray-700 text-tiny felx items-center justify-center"
    >
      <div className="flex items-center justify-center w-full px-8 py-4">
        <span className="font-bold text-xl">Klijent</span>
      </div>
      <div className="flex flex-col w-full p-4 pt-0">
        podaci o klijentu
        <div className="flex items-center justify-between w-full px-8">
          <span
            onClick={cancel}
            className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
          >
            Cancel
          </span>
          <span
            onClick={completeCourse}
            className="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer text-white"
          >
            Send
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddNewClientModal;
