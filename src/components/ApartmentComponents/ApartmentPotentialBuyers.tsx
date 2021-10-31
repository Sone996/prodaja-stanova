import { observer } from "mobx-react-lite";
import { FC } from "react";
import { RootStore } from "../../clientStore";
import Scroll from "../ui/Scroll";
import SimpleTable from "../ui/SimpleTable";

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

const ApartmentPotentialBuyers: FC = observer(() => {
  const { appStore } = RootStore();
  const singleView = (item: any) => {
    console.log(item);
    // history.push({ pathname: `/single-course/${item.id}` });
    //dodaj logiku za postavljanje ponude!!!!!!!
  };
  const addNewBuyer = () => {
    appStore.setModal("add-new-client-modal", true, null);
    console.log("add new buyer");
  };

  return (
    <div className="flex flex-col justify-between w-full p-2">
      <div className="flex">
        <span className="text-semibold text-xl">Potencijalni Kupci:</span>
      </div>
      <div className="flex justify-center w-full h-full">
        <div className="relative h-5/6 w-full">
          <Scroll>
            <SimpleTable singleView={singleView} model={data} titles={titles} />
          </Scroll>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="button bg-blue-500 w-1/4 text-white"
          onClick={addNewBuyer}
        >
          Dodaj novog kupca
        </button>
      </div>
    </div>
  );
});

export default ApartmentPotentialBuyers;
