import { FC } from "react";
import { useHistory } from "react-router";
import SingleClientContracts from "../../components/clientComponents/SingleClientContracts";
import SingleClientData from "../../components/clientComponents/SingleClientData";
import useFetchSingleClientHook from "../../customHooks/ClientHooks/useFetchSingleClientHook";

const SingleClient: FC = () => {
  const history = useHistory();

  let x = history.location.pathname.split("/");
  let id = x[x.length - 1];
  const client = useFetchSingleClientHook(id);

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-1/3 border-b">
        {client.isLoading ? (
          <div>loading</div>
        ) : client.isError ? (
          <div>{client.error.message}</div>
        ) : (
          <SingleClientData data={{ ...client.data }} />
        )}
      </div>
      <div className="flex h-2/3">
        <SingleClientContracts />
      </div>
    </div>
  );
};

export default SingleClient;
