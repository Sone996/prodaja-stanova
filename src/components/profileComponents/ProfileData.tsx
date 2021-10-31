import { FC } from "react";
import { IProfileData } from "../../types/types";

const ProfileData: FC<{ data: IProfileData }> = ({ data }) => {
  return (
    <div className="flex flex-col text-xl text-gray-700">
      <div className="flex mb-2">
        <span className="mr-1">Ime:</span>
        <span className="font-semibold">{data.name}</span>
      </div>
      <div className="flex mb-2">
        <span className="mr-1">Prezime:</span>
        <span className="font-semibold">{data.last_name}</span>
      </div>
      <div className="flex mb-2">
        <span className="mr-1">Korisničko ime:</span>
        <span className="font-semibold">{data.username}</span>
      </div>
      <div className="flex mb-2">
        <span className="mr-1">Lozinka:</span>
        <span className="font-semibold">{data.password ? '**********' : ''}</span>
      </div>
    </div>
  );
};

export default ProfileData;
