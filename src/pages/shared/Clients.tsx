import { observer } from "mobx-react-lite";
import { FC } from "react";
import { RootStore } from "../../clientStore";
import ClientFilters from "../../components/filters/ClientFilters";
import Scroll from "../../components/ui/Scroll";
import SimpleTable from "../../components/ui/SimpleTable";

const data = [
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
];
const titles = ["Id", "Ime", "Prezime", "Rola", "Korisničko ime"];

const Clients: FC = observer(() => {
  const { appStore } = RootStore();

  const singleView = (item: any) => {
    console.log(item);
    // history.push({ pathname: `/single-course/${item.id}` });
  };

  const addClient = () => {
    appStore.setModal("add-new-client-modal", true, null);
  };

  return (
    <div className="flex flex-col h-full bg-gray-200">
      <div className="flex justify-between w-full">
        <span className="text-2xl px-6 py-2">Klijenti</span>
        <span className="flex px-6 py-2 w-1/4">
          <button
            className="button bg-blue-500 mx-6 w-full text-white text-2xl font-bold items-center"
            onClick={addClient}
          >
            +
          </button>
        </span>
      </div>
      <div className="flex items-center w-full justify-center">
        <ClientFilters />
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="relative h-full w-3/4">
          <Scroll>
            <SimpleTable singleView={singleView} model={data} titles={titles} />
          </Scroll>
        </div>
      </div>
    </div>
  );
});

export default Clients;
