import { FC } from "react";



const SingleApartment: FC = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col w-2/5 h-full">
        <div className="flex h-full w-full bg-green">
        </div>
      </div>
      <div className="flex flex-col w-3/5 h-full">
        <div className="flex h-1/2 w-full bg-red"></div>
        <div className="flex h-1/2 w-full bg-lightBlue"></div>
      </div>
    </div>
  );
};

export default SingleApartment;
