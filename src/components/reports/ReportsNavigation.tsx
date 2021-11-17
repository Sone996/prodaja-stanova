import { FC } from "react";

const ReportsNavigation: FC<{
  toggle: (val: string) => void;
  activeTab: string;
}> = ({ toggle, activeTab }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between items-around py-2 px-6 border-b">
        <span
          onClick={() => toggle("Report1")}
          className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
            activeTab === "Report1" ? "text-lightBlue" : null
          }`}
        >
          Po Statusima
        </span>
        <span
          onClick={() => toggle("Report2")}
          className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
            activeTab === "Report2" ? "text-lightBlue" : null
          }`}
        >
          Prodati Stanovi
        </span>
        <span
          onClick={() => toggle("Report3")}
          className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
            activeTab === "Report3" ? "text-lightBlue" : null
          }`}
        >
          Ostvarene Prodaje
        </span>
        <span
          onClick={() => toggle("Report4")}
          className={`hover:text-lightBlue cursor-pointer rounded-md p-3 mx-2 ${
            activeTab === "Report4" ? "text-lightBlue" : null
          }`}
        >
          Neostvarene Prodaje
        </span>
      </div>
    </div>
  );
};

export default ReportsNavigation;
