import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useHistory } from "react-router";
import { RootStore } from "../../clientStore";
import useFetchContracyByApartment from "../../customHooks/contractHooks/useFetchContracyByApartment";
import Scroll from "../ui/Scroll";
import SimpleTable from "../ui/SimpleTable";

const titles = ["Id korisnika", "Ime", "E-mail", "Telefon", "Datum kreiranja"];

const ApartmentPotentialBuyers: FC = observer(() => {
  const { appStore } = RootStore();
  const history = useHistory();
  let x = history.location.pathname.split("/");
  let id = x[x.length - 1];
  const contracts = useFetchContracyByApartment(id);

  const singleView = (item: any) => {
    console.log(item);
    // history.push({ pathname: `/single-course/${item.id}` });
    //dodaj logiku za postavljanje ponude!!!!!!!
  };

  const addNewBuyer = () => {
    appStore.setModal("add-new-client-modal", true, null);
    console.log("add new buyer");
  };

  const chooseBuyer = () => {
    appStore.setModal("choose-existing-client-modal", true, null);
  };

  return (
    <div className="flex flex-col justify-between w-full p-2">
      <div className="flex">
        <span className="text-semibold text-xl">Potencijalni Kupci:</span>
      </div>
      <div className="flex justify-center w-full h-full">
        <div className="relative h-5/6 w-full">
          {contracts.isLoading ? (
            <div>loading</div>
          ) : contracts.isError ? (
            <div>{contracts.error.message}</div>
          ) : contracts.data.length === 0 ? (
            <span>Nema ponuda</span>
          ) : (
            <Scroll>
              <SimpleTable
                singleView={singleView}
                model={contracts.data}
                titles={titles}
              />
            </Scroll>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="button bg-darkGreen w-1/4 text-white"
          onClick={chooseBuyer}
        >
          Izaberi postojećeg
        </button>
        <button
          className="button bg-blue-500 w-1/4 text-white ml-4"
          onClick={addNewBuyer}
        >
          Dodaj novog kupca
        </button>
      </div>
    </div>
  );
});

export default ApartmentPotentialBuyers;
