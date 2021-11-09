import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { apartmentService } from "../../serverStore/ApartmentModule/Apartment.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";

const useFetchApartmentsHook = (filters: {
  status: null | string;
  square_footage: null | string;
}) => {
  const fetchApartments = async () => {
    const res = await apartmentService.fetchApartments(filters);
    return res.data;
  };

  return useQuery(["apartments", filters], fetchApartments, {
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
    onSettled: (val: any) => {
      //   parseApartments(val);
    },
  });
};

export default useFetchApartmentsHook;
