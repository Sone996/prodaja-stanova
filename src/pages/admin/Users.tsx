import { observer } from "mobx-react-lite";
import { FC } from "react";
import { RootStore } from "../../clientStore";
import UsersFilters from "../../components/filters/UsersFilters";
import Scroll from "../../components/ui/Scroll";
import SimpleTable from "../../components/ui/SimpleTable";
import FetchUseresHook from "../../customHooks/FetchUsersHook";
import { IUserForEdit } from "../../types/types";


const titles = ["Id", "Ime", "Prezime", "Rola", "Korisničko ime"];

const Users: FC = observer(() => {
  const { appStore } = RootStore();
  const addUser = () => {
    appStore.setModal("new-user-modal", true, null);
  };
  const singleView = (item: IUserForEdit) => {
    appStore.setModal("new-user-modal", true, item);
  };

  let users = FetchUseresHook();

  return (
    <div className="flex flex-col h-full w-full bg-gray-200">
      <div className="flex justify-between w-full">
        <span className="text-2xl px-6 py-2">Korisnici sistema</span>
        <span className="flex px-6 py-2 w-1/4">
          <button
            className="button bg-blue-500 mx-6 w-full text-white text-2xl font-bold items-center"
            onClick={addUser}
          >
            +
          </button>
        </span>
      </div>
      <div className="flex items-center w-full justify-center">
        <UsersFilters />
      </div>
      <div className="flex justify-center h-full">
        <div className="relative h-full w-3/4">
          {users.isLoading ? (
            <div>loading</div>
          ) : users.isError ? (
            <div>{users.error.message}</div>
          ) : (
            <Scroll>
              <SimpleTable
                singleView={singleView}
                model={users.data.data}
                titles={titles}
              />
            </Scroll>
          )}
        </div>
      </div>
    </div>
  );
});

export default Users;
