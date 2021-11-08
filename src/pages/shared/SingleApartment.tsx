import { FC } from "react";
import { useHistory } from "react-router-dom";
import ApartmentData from "../../components/ApartmentComponents/ApartmentData";
import ApartmentGalery from "../../components/ApartmentComponents/ApartmentGalery";
import ApartmentPotentialBuyers from "../../components/ApartmentComponents/ApartmentPotentialBuyers";
import FetchSingleApartmentHook from "../../customHooks/apartmentHooks/FetchSingleApartmentHook";
// import { ISingleApartmentData } from "../../types/types";

const SingleApartment: FC = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  //   "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  //   "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  //   "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  // ];

  const history = useHistory();

  let x = history.location.pathname.split("/");
  let id = x[x.length - 1];
  const apartment = FetchSingleApartmentHook(id);

  return (
    <div className="flex h-full w-full">
      {apartment.isLoading ? (
        <div>loading</div>
      ) : apartment.isError ? (
        <div>{apartment.error.message}</div>
      ) : (
        <>
          <div className="flex flex-col w-2/5 h-full">
            <div className="flex h-full w-full border-r">
              <ApartmentGalery images={apartment.data.photo} />
            </div>
          </div>
          <div className="flex flex-col w-3/5 h-full">
            <div className="flex h-1/3 w-full border-b p-2">
              <div className="flex flex-col w-full justify-between">
                <ApartmentData data={{ ...apartment.data }} />
              </div>
            </div>
            <div className="flex h-2/3 w-full p-2">
              <ApartmentPotentialBuyers />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleApartment;
