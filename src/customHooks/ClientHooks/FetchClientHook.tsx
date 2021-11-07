import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { clientService } from "../../serverStore/ClientModule/Client.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";

const FetchClientsHook = () => {
  const parseClients = (data: any) => {
    let users = data.data;
    console.log(users)
    // users.forEach((user: {}, i: number) => {
    //   users[i] = {
    //     id: users[i].id,
    //     first_name: users[i].first_name,
    //     last_name: users[i].last_name,
    //     role: users[i].role,
    //     username: users[i].username,
    //   };
    // });
    // return users.data;
  };

  const fetchCLients = async () => {
    const res = await clientService.fetchUsers();
    return res;
  };

  return useQuery("clients", fetchCLients, {
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

export default FetchClientsHook;
