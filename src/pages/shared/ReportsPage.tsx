import { FC, useState } from "react";
import FinishedSalesReport from "../../components/reports/FinishedSalesReport";
import NotFinishedSalesReport from "../../components/reports/NotFinishedSalesReport";
import ReportsNavigation from "../../components/reports/ReportsNavigation";
import SoledApartmentsReport from "../../components/reports/SoledApartmentsReport";
import StatusReport from "../../components/reports/StatusReport";

const Reports: FC = () => {
  const [activeTab, setActiveTab] = useState("Report1");

  const taggleTabs = (val: string): void => {
    setActiveTab(val);
  };
  return (
    <div>
      <ReportsNavigation toggle={taggleTabs} activeTab={activeTab} />
      {activeTab === "Report1" ? (
        <StatusReport />
      ) : activeTab === "Report2" ? (
        <SoledApartmentsReport />
      ) : activeTab === "Report3" ? (
        <FinishedSalesReport />
      ) : activeTab === "Report4" ? (
        <NotFinishedSalesReport />
      ) : null}
    </div>
  );
};

export default Reports;
