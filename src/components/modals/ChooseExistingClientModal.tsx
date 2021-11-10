import { FC } from "react";
import { RootStore } from "../../clientStore";
import useFetchClientsHook from "../../customHooks/ClientHooks/useFetchClientHook";
import Scroll from "../ui/Scroll";
import SimpleTable from "../ui/SimpleTable";

const titles = ["Id", "Ime/Naziv", "Tip", "Telefon", "E-mail", "Adresa"];

const ChooseExistingClientModal: FC = () => {
  const { appStore } = RootStore();
  const clients = useFetchClientsHook(null);

  const singleView = (item: any) => {
    appStore.setModal("add-contract-modal", true, item.id);
  };

  const cancel = () => {
    appStore.closeModal();
  };

  return (
    <div
      id="add-new-client-modal"
      className="choose-existing-client-modal rounded-lg w-9/12 h-4/6 bg-white flex flex-col absolute text-gray-700 text-tiny felx items-center justify-between"
    >
      <div className="flex items-center justify-center w-full px-8 py-4">
        <span className="font-bold text-xl">Izaberi Klijenta</span>
      </div>
      <div className="flex flex-col w-full p-4 pt-0 h-full">
        <div className="flex items-center justify-center h-full">
          <div className="relative flex flex-grow h-64 w-3/4">
            {clients.isLoading ? (
              <div>loading</div>
            ) : clients.isError ? (
              <div>{clients.error.message}</div>
            ) : (
              <Scroll>
                <SimpleTable
                  singleView={singleView}
                  model={clients.data.data}
                  titles={titles}
                />
              </Scroll>
            )}
          </div>
        </div>

        <div className="flex">
          <span
            onClick={cancel}
            className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
          >
            Cancel
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChooseExistingClientModal;
