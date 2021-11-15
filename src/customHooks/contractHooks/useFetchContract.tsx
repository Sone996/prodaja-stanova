import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { contractService } from "../../serverStore/ContractModule/Contract.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";
import { IIdsForContract } from "../../types/types";

const useFetchContract = (data: IIdsForContract) => {
  const fetchContract = async () => {
    const res = await contractService.fetchContract(data);
    return res.data;
  };

  return useQuery(["fullContract", data.client_id], fetchContract, {
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
  });
};

export default useFetchContract;
