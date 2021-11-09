import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { apartmentService } from "../../serverStore/ApartmentModule/Apartment.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";

const useFetchSingleApartmentHook = (id: string) => {
  const fetchSingleApartment = async () => {
    const res = await apartmentService.fetchSingleApartment(id);
    return res.data;
  };

  return useQuery("apartment", fetchSingleApartment, {
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
    onSettled: (val: any) => {
      // console.log(val)
    },
  });
};

export default useFetchSingleApartmentHook;
