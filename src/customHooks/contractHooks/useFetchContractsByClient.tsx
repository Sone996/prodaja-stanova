import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { contractService } from "../../serverStore/ContractModule/Contract.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";
import { DateTime } from "luxon";

const useFetchContracyByClient = (id: string) => {
  const parseContacts = (data: any) => {
    data.forEach((user: {}, i: number) => {
      data[i] = {
        apartment_id: data[i].apartment.id,
        client_id: data[i].customer.id,
        contract_id: data[i].id,
        contract_number: data[i].contract_number,
        approved: data[i].approved,
        status: data[i].status,
        signed: data[i].signed,
        date_of_creation: DateTime.fromJSDate(
          new Date(data[i].date_of_creation)
        ).toFormat("yyyy-LL-dd"),
      };
    });
    return data;
  };
  const fetchContracts = async () => {
    const res = await contractService.fetchContractsForClient(id);
    return res.data;
  };

  return useQuery("contractsByClient", fetchContracts, {
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
    onSettled: (val: any) => {
      // console.log(val)
      parseContacts(val);
    },
  });
};

export default useFetchContracyByClient;
