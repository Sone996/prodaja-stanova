import { FC } from "react";
import Scroll from "../../components/ui/Scroll";
import SimpleTable from "../../components/ui/SimpleTable";

const data = [
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
  {
    id: 1,
    name: "test",
    last_name: "test",
    role: "prodavac",
    user_name: "Medeni",
  },
];
const titles = ["Id", "Ime", "Prezime", "Rola", "Korisničko ime"];

const Clients: FC = () => {
  const singleView = (item: any) => {
    console.log(item);
    // history.push({ pathname: `/single-course/${item.id}` });
  };
  return (
    <div className="flex flex-col h-full">
      <span className="text-2xl px-6 py-2">Klijenti</span>
      <div className="flex items-center justify-center h-full">
        <div className="relative h-full w-3/4">
          <Scroll>
            <SimpleTable singleView={singleView} model={data} titles={titles} />
          </Scroll>
        </div>
      </div>
    </div>
  );
};

export default Clients;
