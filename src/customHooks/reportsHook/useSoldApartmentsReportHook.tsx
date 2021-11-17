import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { reportsService } from "../../serverStore/ReportsModule/Reports.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";

const useSoldApartmentReportHook = (
  filters: { start_date: string; end_date: string } | null
) => {
  const fetchStatusReport = async () => {
    const res = await reportsService.fetchSoldApartmentsReport(filters);
    return res.data;
  };

  return useQuery(
    ["soledApartmentsReport", filters?.start_date, filters?.end_date],
    fetchStatusReport,
    {
      onError: (err: AxiosError) => {
        errorMsg(notificationMsg(err, null));
      },
    }
  );
};

export default useSoldApartmentReportHook;
