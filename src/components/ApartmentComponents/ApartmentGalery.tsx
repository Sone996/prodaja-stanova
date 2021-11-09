import { FC } from "react";
import Scroll from "../ui/Scroll";

const ApartmentGalery: FC<{ images: string }> = ({ images }) => {
  const img = [images, images, images, images];

  return (
    <div className="flex justify-center h-full w-full">
      <div className="relative h-full w-full">
        <Scroll>
          {images ? (
            img.map((image: string, index: number) => (
              <img
                key={index}
                className="p-4"
                src={image}
                alt="img"
              />
            ))
          ) : (
            <img
              className="p-4"
              src={
                "https://dchba.org/wp-content/uploads/2020/06/house-placeholder.png"
              }
              alt="img"
            />
          )}
        </Scroll>
      </div>
    </div>
  );
};

export default ApartmentGalery;
