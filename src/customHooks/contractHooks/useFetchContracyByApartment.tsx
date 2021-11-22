import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { contractService } from "../../serverStore/ContractModule/Contract.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";
import { DateTime } from "luxon";

const useFetchContracyByApartment = (id: string) => {
  const parseContacts = (data: any) => {
    data.forEach((user: {}, i: number) => {
      data[i] = {
        apartment_id: data[i].apartment.id,
        client_id: data[i].customer.id,
        contract_id: data[i].id,
        name: data[i].customer.name,
        email: data[i].customer.email,
        phone: data[i].customer.phone,
        date_of_creation: DateTime.fromJSDate(
          new Date(data[i].date_of_creation)
        ).toFormat("yyyy-LL-dd"),
      };
    });
    return data;
  };
  const fetchContracts = async () => {
    const res = await contractService.fetchContractsForApartment(id);
    return res.data;
  };

  return useQuery("contractsByApartment", fetchContracts, {
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
    onSettled: (val) => {
      parseContacts(val);
    },
  });
};

export default useFetchContracyByApartment;
