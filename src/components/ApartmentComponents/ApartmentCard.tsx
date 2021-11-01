import { FC } from "react";
import { useHistory } from "react-router";

const ApartmentCard: FC = () => {
  const history = useHistory();

  const singleApartment = () => {
    console.log("single");
    // history.push({ pathname: `/apartment/${item.id}` });
    history.push({ pathname: `/apartment` });
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
            src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs bg-darkGreen bg-opacity-50">
            Dostupan
          </span>

          <div className="flex">
            <div className="flex flex-col w-1/2">
              <span className="my-1">id: 1</span>
              <span className="my-1">labela: 1</span>
              <span className="my-1">Kvadratura: 200</span>
            </div>
            <div className="flex flex-col w-1/2">
              <span className="my-1">br. soba: 5</span>
              <span className="my-1">sprat: 0</span>
              <span className="my-1">terase: 2</span>
            </div>
          </div>
          <div className="flex justify-end">
            <span className="text-lg font-bold text-darkGreen">135 000€</span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default ApartmentCard;
