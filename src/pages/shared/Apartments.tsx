import { FC } from "react";
import Scroll from "../../components/ui/Scroll";
import ApartmentCard from "../../components/ApartmentCard";

const Apartments: FC = () => {
  return (
    <div className="relative h-full w-full">
      <Scroll>
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
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
