import { FC } from "react";
import { ISingleApartmentData } from "../../types/types";

const ApartmentData: FC<{ data: ISingleApartmentData }> = ({ data }) => {
  const editData = () => {
    console.log("edit");
  };

  return (
    <>
      <div className="flex mt-4 text-gray-700">
        <div className="flex flex-col w-1/2">
          <span className="my-1 text-xl">id: {data.id}</span>
          <span className="my-1 text-xl">labela: {data.labela}</span>
          <span className="my-1 text-xl">Kvadratura: {data.square}</span>
        </div>
        <div className="flex flex-col w-1/2">
          <span className="my-1 text-xl">br. soba: {data.rooms}</span>
          <span className="my-1 text-xl">sprat: {data.flor}</span>
          <span className="my-1 text-xl">terase: {data.balcony}</span>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <span className="flex items-center px-2 py-1 font-semibold uppercase rounded-md tracking-wide text-xs bg-darkGreen text-white bg-opacity-50">
          Dostupan
        </span>
        <button
          className="button bg-blue-500 w-1/4 text-white"
          onClick={editData}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default ApartmentData;
