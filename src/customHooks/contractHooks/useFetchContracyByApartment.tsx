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
        id: data[i].customer.id,
        name: data[i].customer.name,
        email: data[i].customer.email,
        phone: data[i].customer.phone,
        date_of_creation: DateTime.fromJSDate(new Date(data[i].date_of_creation)).toFormat("yyyy-LL-dd")
      };
    });
    return data;
  };
  const fetchContracts = async () => {
    const res = await contractService.fetchContractsForApartment(id);
    return res.data;
  };

  return useQuery(["contracts_by_apartment", id], fetchContracts, {
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
    onSettled: (val: any) => {
      parseContacts(val);
    },
  });
};

export default useFetchContracyByApartment;
