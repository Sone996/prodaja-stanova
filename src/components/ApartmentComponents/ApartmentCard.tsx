import { FC } from "react";
import { useHistory } from "react-router";
import { IApartmenttt } from "../../types/types";

const ApartmentCard: FC<{ props: IApartmenttt }> = ({ props }) => {
  const {
    id,
    lamella,
    square_footage,
    rooms,
    floor,
    balconies,
    price,
    status,
    photo,
  } = props;
  const history = useHistory();

  const singleApartment = () => {
    history.push({ pathname: `/apartment/${id}` });
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <span
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden cursor-pointer"
        onClick={singleApartment}
      >
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={
              photo
                ? photo
                : "https://dchba.org/wp-content/uploads/2020/06/house-placeholder.png"
            }
            alt="img"
          />
        </div>
        <div className="p-4">
          <span
            className={`inline-block px-2 py-1 leading-none text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs bg-opacity-50 ${
              status === "available"
                ? "bg-darkGreen"
                : status === "sold"
                ? "bg-darkRed"
                : "bg-orange-200"
            }`}
          >
            {status === "available"
              ? "Dostupan"
              : status === "sold"
              ? "Prodat"
              : "Rezervisan"}
          </span>

          <div className="flex">
            <div className="flex flex-col w-1/2">
              <span className="my-1">id: {id}</span>
              <span className="my-1 truncate">labela: {lamella}</span>
              <span className="my-1">Kvadratura: {square_footage}</span>
            </div>
            <div className="flex flex-col w-1/2">
              <span className="my-1">br. soba: {rooms}</span>
              <span className="my-1">sprat: {floor}</span>
              <span className="my-1">terase: {balconies}</span>
            </div>
          </div>
          <div className="flex justify-end">
            <span className="text-lg font-bold text-darkGreen">{price}€</span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default ApartmentCard;
