import { FC, useEffect } from "react";
import Scroll from "../../components/ui/Scroll";
import ApartmentCard from "../../components/ApartmentComponents/ApartmentCard";
import { useHistory } from "react-router";
import ApartmentsFilters from "../../components/filters/ApartmentsFilters";
import FetchApartmentsHook from "../../customHooks/apartmentHooks/FetchApartmentsHook";
import { IApartmenttt } from "../../types/types";
import { observer } from "mobx-react-lite";
import { RootStore } from "../../clientStore";

const Apartments: FC = observer(() => {
  const { filtersModule } = RootStore();
  const history = useHistory();
  var apartments = FetchApartmentsHook(filtersModule.getApartmentFilters);

  const addApartment = () => {
    history.push("/new-apartment");
  };

  // SORT
  useEffect(() => {
    if (apartments.isSuccess && apartments.data) {
      if (filtersModule.getApartmentSortByPrice) {
        apartments.data.sort((a: any, b: any) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
      }
      if (!filtersModule.getApartmentSortByPrice) {
        apartments.data.sort((a: any, b: any) =>
          b.price > a.price ? 1 : a.price > b.price ? -1 : 0
        );
      }
    }
  }, [filtersModule.getApartmentSortByPrice, apartments.data]);
  // END :: SORT

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
                  return (
                    <ApartmentCard
                      key={apartment.id}
                      props={{ ...apartment }}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </Scroll>
    </div>
  );
});

export default Apartments;
