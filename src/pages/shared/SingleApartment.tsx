import { FC } from "react";
import { useHistory } from "react-router-dom";
import ApartmentData from "../../components/ApartmentComponents/ApartmentData";
import ApartmentGalery from "../../components/ApartmentComponents/ApartmentGalery";
import ApartmentPotentialBuyers from "../../components/ApartmentComponents/ApartmentPotentialBuyers";
import useFetchSingleApartmentHook from "../../customHooks/apartmentHooks/useFetchSingleApartmentHook";

const SingleApartment: FC = () => {
  const history = useHistory();

  let x = history.location.pathname.split("/");
  let id = x[x.length - 1];
  const apartment = useFetchSingleApartmentHook(id);

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
              <ApartmentPotentialBuyers sold={apartment.data.status} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleApartment;
