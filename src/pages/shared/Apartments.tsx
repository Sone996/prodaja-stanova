import { FC } from "react";
import Scroll from "../../components/ui/Scroll";
import ApartmentCard from "../../components/ApartmentComponents/ApartmentCard";
import { useHistory } from "react-router";

const Apartments: FC = () => {
  const history = useHistory();

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
            <div className="flex flex-wrap -mx-4">
              <ApartmentCard />
              <ApartmentCard />
              <ApartmentCard />
              <ApartmentCard />
              <ApartmentCard />
              <ApartmentCard />
              <ApartmentCard />
              <ApartmentCard />
            </div>
          </div>
        </div>
      </Scroll>
    </div>
  );
};

export default Apartments;
