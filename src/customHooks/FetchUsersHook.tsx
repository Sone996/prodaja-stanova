import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { usersService } from "../serverStore/UsersModule/Users.service";
import { notificationMsg } from "../services/BaseService";
import { errorMsg } from "../services/MessageDisplayHandler";

const FetchUseresHook = () => {
  const parseUsers = (data: any) => {
    let users = data.data;
    users.forEach((user: {}, i: number) => {
      users[i] = {
        id: users[i].id,
        first_name: users[i].first_name,
        last_name: users[i].last_name,
        role: users[i].role,
        username: users[i].username,
      };
    });
    return users.data;
  };

  const fetchUsers = async () => {
    const res = await usersService.fetchUsers();
    return res;
  };

  return useQuery("users", fetchUsers, {
    onError: (err: AxiosError) => {
      if (err && err.response) {
        errorMsg(notificationMsg(err, null));
      }
    },
    onSettled: (val: any) => {
      parseUsers(val);
    },
  });
};

export default FetchUseresHook;
