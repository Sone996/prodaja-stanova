import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { clientService } from "../../serverStore/ClientModule/Client.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";
import { IBasicClient, IClientFilters } from "../../types/types";

const useFetchClientsHook = (filters: IClientFilters) => {
  const parseClients = (data: any) => {
    let users = data.data;
    users.forEach((user: IBasicClient, i: number) => {
      user.type === "individual"
        ? (user.type = "Fizičko lice")
        : (user.type = "Pravno lice");
      users[i] = {
        id: users[i].id,
        name: users[i].name,
        type: users[i].type,
        phone: users[i].phone,
        email: users[i].email,
        address: users[i].address,
      };
    });
    return users.data;
  };

  const fetchCLients = async () => {
    const res = await clientService.fetchClients(filters);
    return res;
  };

  return useQuery(["clients", filters], fetchCLients, {
    onError: (err: AxiosError) => {
      if (err && err.response) {
        errorMsg(notificationMsg(err, null));
      }
    },
    onSettled: (val: any) => {
      parseClients(val);
    },
  });
};

export default useFetchClientsHook;
