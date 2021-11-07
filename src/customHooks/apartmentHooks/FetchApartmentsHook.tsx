import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { apartmentService } from "../../serverStore/ApartmentModule/Apartment.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";

const FetchApartmentsHook = () => {

  const fetchApartments = async () => {
    const res = await apartmentService.fetchApartments();
    return res.data;
  };

  return useQuery("apartments", fetchApartments, {
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
    onSettled: (val: any) => {
      //   parseApartments(val);
    },
  });
};

export default FetchApartmentsHook;
