import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router";
import { RootStore } from "../../clientStore";
import { IApartmenttt, ILoggedUser } from "../../types/types";

const ApartmentData: FC<{ data: IApartmenttt }> = observer(({ data }) => {
  const {
    id,
    lamella,
    square_footage,
    orientation,
    rooms,
    floor,
    balconies,
    price,
    status,
  } = data;
  const loggedUser: ILoggedUser | undefined =
    useQueryClient().getQueryData("activeUser");
  const { saveFormsModule } = RootStore();
  const history = useHistory();
  const editData = () => {
    history.push("/new-apartment");
    saveFormsModule.setEditApartment(data);
  };

  const parseOrijentation = (data: string) => {
    return data === "North"
      ? "Sever"
      : data === "South"
      ? "Jug"
      : data === "east"
      ? "Istok"
      : "Zapad";
  };

  const statusParser = (data: string) => {
    if (data !== "") {
      return data === "available"
        ? "Dostupan"
        : data === "sold"
        ? "Prodat"
        : "Rezervisan";
    }
  };

  return (
    <>
      <div className="flex mt-4 text-gray-700">
        <div className="flex flex-col w-1/2">
          <span className="my-1 text-xl">id: {id}</span>
          <span className="my-1 text-xl">lamela: {lamella}</span>
          <span className="my-1 text-xl">Kvadratura: {square_footage}</span>
          <span className="my-1 text-xl">
            Orijentacija: {parseOrijentation(orientation)}
          </span>
        </div>
        <div className="flex flex-col w-1/2">
          <span className="my-1 text-xl">br. soba: {rooms}</span>
          <span className="my-1 text-xl">sprat: {floor}</span>
          <span className="my-1 text-xl">terase: {balconies}</span>
          <span className="my-1 text-xl">Cena: {price}</span>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <span
          className={`flex items-center px-2 py-1 font-semibold uppercase rounded-md tracking-wide text-xs text-white bg-opacity-50 ${
            status === "available"
              ? "bg-darkGreen"
              : status === "sold"
              ? "bg-darkRed"
              : "bg-yellow-500"
          }`}
        >
          {statusParser(status ? status : "")}
        </span>
        {loggedUser?.role === "admin" && status === "available" && (
          <button
            className="button bg-blue-500 w-1/4 text-white"
            onClick={editData}
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
});

export default ApartmentData;
