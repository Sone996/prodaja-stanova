import { FC } from "react";
import ApartmentData from "../../components/ApartmentComponents/ApartmentData";
import ApartmentGalery from "../../components/ApartmentComponents/ApartmentGalery";
import ApartmentPotentialBuyers from "../../components/ApartmentComponents/ApartmentPotentialBuyers";
import { ISingleApartmentData } from "../../types/types";

const SingleApartment: FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  ];

  const apartment: ISingleApartmentData = {
    id: 1,
    labela: 1,
    square: 200,
    rooms: 5,
    flor: 0,
    balcony: 2,
    status: "Dostupan",
  };

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col w-2/5 h-full">
        <div className="flex h-full w-full border-r">
          <ApartmentGalery images={images} />
        </div>
      </div>
      <div className="flex flex-col w-3/5 h-full">
        <div className="flex h-1/3 w-full border-b p-2">
          <div className="flex flex-col w-full justify-between">
            <ApartmentData data={apartment} />
          </div>
        </div>
        <div className="flex h-2/3 w-full p-2">
          <ApartmentPotentialBuyers />
        </div>
      </div>
    </div>
  );
};

export default SingleApartment;
