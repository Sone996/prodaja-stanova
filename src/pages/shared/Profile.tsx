import { FC, useState } from "react";
import ProfileData from "../../components/profileComponents/ProfileData";
import EditProfileData from "../../components/profileComponents/EditProfileData";
import { IProfileData } from "../../types/types";

const oldData: IProfileData = {
  name: "Ime",
  last_name: "Prezime",
  username: "SoneCar",
  password: "Sone123",
  repeatPassword: "Sone123",
};
const Profile: FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center pl-6 py-2">
        <span className="text-2xl">Ime Prezime</span>
      </div>
      <div className="border rounded-md w-1/2 ml-6 px-6 py-2">
        {isEdit ? (
          <EditProfileData oldData={oldData} />
        ) : (
          <ProfileData data={oldData} />
        )}
        <div className="flex justify-end mt-2">
          <button
            className={`button w-1/3 text-white ${
              isEdit ? "bg-darkRed" : "bg-blue-500"
            }`}
            onClick={toggleEdit}
          >
            {isEdit ? "Odustani" : "Izmeni"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
