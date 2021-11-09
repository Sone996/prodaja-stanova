import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { apartmentService } from "../../serverStore/ApartmentModule/Apartment.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg, successMsg } from "../../services/MessageDisplayHandler";
import { IApartmenttt } from "../../types/types";

export function useAddNewApartmentHook() {
  return useMutation(
    (val: IApartmenttt) => apartmentService.newApartment(val),
    {
      onSuccess: (response) => {
        successMsg(notificationMsg(response, "APARTMENT_CREATED"));
      },
      onError: (err: AxiosError) => {
        errorMsg(notificationMsg(err, null));
      },
    }
  );
}
