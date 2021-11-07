import { FC } from "react";
import Scroll from "../../components/ui/Scroll";
import ApartmentCard from "../../components/ApartmentComponents/ApartmentCard";
import { useHistory } from "react-router";
import ApartmentsFilters from "../../components/filters/ApartmentsFilters";
import FetchApartmentsHook from "../../customHooks/apartmentHooks/FetchApartmentsHook";
import { IApartmenttt } from "../../types/types";

const Apartments: FC = () => {
  const history = useHistory();
  const apartments = FetchApartmentsHook();

  const addApartment = () => {
    history.push("/new-apartment");
  };

  return (
    <div className="relative h-full w-full">
      <Scroll>
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
          <div className="flex py-1 w-full justify-end">
            <button
              className="button bg-blue-500 w-1/6 text-white text-2xl font-bold items-center"
              onClick={addApartment}
            >
              +
            </button>
          </div>
          <div className="container mx-auto">
            <ApartmentsFilters />
            <div className="flex flex-wrap -mx-4">
              {apartments.isLoading ? (
                <div>loading</div>
              ) : apartments.isError ? (
                <div>{apartments.error.message}</div>
              ) : (
                apartments.data.map((apartment: IApartmenttt) => {
                  return <ApartmentCard key={apartment.id} props={{...apartment}}/>;
                })
              )}
            </div>
          </div>
        </div>
      </Scroll>
    </div>
  );
};

export default Apartments;
