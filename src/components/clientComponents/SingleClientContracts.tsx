import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { RootStore } from "../../clientStore";
import useFetchContracyByClient from "../../customHooks/contractHooks/useFetchContractsByClient";
import { ISingleCLientContracts } from "../../types/types";
import Scroll from "../ui/Scroll";
import SimpleTable from "../ui/SimpleTable";

const titles = [
  "Id Stana",
  "Id korisnika",
  "Id Ugovora",
  "Broj ugovora",
  "Odobren",
  "Status",
  "Potpisan",
  "Datum kreiranja",
];

const SingleClientContracts: FC = observer(() => {
  const { saveFormsModule } = RootStore();
  const history = useHistory();
  let x = history.location.pathname.split("/");
  let id = x[x.length - 1];
  const contracts = useFetchContracyByClient(id);

  const singleView = (item: ISingleCLientContracts) => {
    console.log(item)
    saveFormsModule.setIdsForContract({
      apartment_id: item.apartment_id,
      contract_id: item.contract_id,
      client_id: item.client_id,
    });
    history.push({ pathname: `/contract` });
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-between w-full">
        <span className="text-2xl px-6 py-2">Ugovori i predugovori</span>
      </div>
      <div className="flex justify-center h-full">
        <div className="relative h-full w-3/4">
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
    </div>
  );
});

export default SingleClientContracts;
