import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { reportsService } from "../../serverStore/ReportsModule/Reports.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";
import { IApartment, IReportsFullFilters } from "../../types/types";

// const titles = [
//     "Id stana",
//     "Lamela",
//     "Br. soba",
//     "Br. terasa",
//     "Kvadratura",
//     "Cena",
//   ];
const useNotnotFinishedSalesReportHook = (
  filters: IReportsFullFilters | null | undefined
) => {
  const parser = (data: IApartment[]) => {
    let notFinishedSales: any = data;
    notFinishedSales.forEach((sale: {}, i: number) => {
      notFinishedSales[i] = {
        id: notFinishedSales[i].id,
        lamella: notFinishedSales[i].lamella,
        rooms: notFinishedSales[i].rooms,
        balconies: notFinishedSales[i].balconies,
        square_footage: notFinishedSales[i].square_footage,
        price: notFinishedSales[i].price,
      };
    });
    return notFinishedSales;
  };
  const fetchStatusReport = async () => {
    const res = await reportsService.fetchNotFinishedSalesReport(filters);
    return res.data;
  };

  return useQuery(
    [
      "notFinishedSalesReport",
      filters?.customer_id,
      filters?.start_date,
      filters?.end_date,
    ],
    fetchStatusReport,
    {
      onError: (err: AxiosError) => {
        errorMsg(notificationMsg(err, null));
      },
      onSettled: (val) => {
        parser(val);
      },
    }
  );
};

export default useNotnotFinishedSalesReportHook;
