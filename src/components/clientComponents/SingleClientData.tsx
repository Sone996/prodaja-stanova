import { FC } from "react";
import { IFullClient } from "../../types/types";

const SingleClientData: FC<{ data: IFullClient }> = ({ data }) => {
  const {
    address,
    date_of_creation,
    date_of_update,
    email,
    name,
    phone,
    pib_jmbg,
    type,
  } = data;
  return (
    <div className="flex text-2xl py-2 px-4 text-gray-700 w-full">
      <div className="flex flex-col w-1/2">
        <div className="flex mt-2">
          <span className="mr-2">Ime:</span>
          <span className="font-semibold">{name}</span>
        </div>
        <div className="flex pt-2">
          <span className="mr-2">Tip:</span>
          <span className="font-semibold">{type}</span>
        </div>
        <div className="flex pt-2">
          <span className="mr-2">E-mail:</span>
          <span className="font-semibold">{email}</span>
        </div>
        <div className="flex pt-2">
          <span className="mr-2">Telefon:</span>
          <span className="font-semibold">{phone}</span>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex pt-2">
          <span className="mr-2">PIB/JMBG:</span>
          <span className="font-semibold">{pib_jmbg}</span>
        </div>
        <div className="flex mt-2">
          <span className="mr-2">Adresa:</span>
          <span className="font-semibold">{address}</span>
        </div>
        <div className="flex pt-2">
          <span className="mr-2">Datum kreiranja:</span>
          <span className="font-semibold">{date_of_creation}</span>
        </div>
        <div className="flex pt-2">
          <span className="mr-2">Datum izmene:</span>
          <span className="font-semibold">{date_of_update}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleClientData;
