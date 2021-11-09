import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { clientService } from "../../serverStore/ClientModule/Client.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";

const useFetchSingleClientHook = (id: string) => {
  const fetchSingleClient = async () => {
    const res = await clientService.fetchSingleClient(id);
    return res.data;
  };

  return useQuery(["client", id], fetchSingleClient, {
    onError: (err: AxiosError) => {
      errorMsg(notificationMsg(err, null));
    },
    onSettled: (val: any) => {
      // console.log(val)
    },
  });
};

export default useFetchSingleClientHook;
