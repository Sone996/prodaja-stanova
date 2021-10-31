import { FC } from "react";
import Scroll from "../ui/Scroll";


const ApartmentGalery: FC<{images: string[]}> = ({images}) => {
  return (
    <div className="flex justify-center h-full w-full">
      <div className="relative h-full w-full">
        <Scroll>
          {images.map((image: string, index: number) => (
            <img key={index} className="p-4" src={image} alt="img" />
          ))}
        </Scroll>
      </div>
    </div>
  );
};

export default ApartmentGalery;
