import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { DateTime } from "luxon";
import { reportsService } from "../../serverStore/ReportsModule/Reports.service";
import { notificationMsg } from "../../services/BaseService";
import { errorMsg } from "../../services/MessageDisplayHandler";
import { IEditContract, IReportsFullFilters } from "../../types/types";

const useFinishedSalesReportHook = (
  filters: IReportsFullFilters | null | undefined
) => {
  const parser = (data: IEditContract[]) => {
    let finishedSales: any = data;
    finishedSales.forEach((sale: {}, i: number) => {
      finishedSales[i] = {
        id: finishedSales[i].id,
        customer_id: finishedSales[i].customer.id,
        user_id: finishedSales[i].user.id,
        contract_number: finishedSales[i].contract_number,
        customer_name: finishedSales[i].customer.name,
        user_name: finishedSales[i].user.first_name,
        date_of_creation: DateTime.fromJSDate(
          new Date(finishedSales[i].date_of_creation)
        ).toFormat("dd.LL.yyyy."),
        price: finishedSales[i].price,
      };
    });
    return finishedSales;
  };
  const fetchStatusReport = async () => {
    const res = await reportsService.finishedSalesReport(filters);
    return res.data;
  };

  return useQuery(
    [
      "finishedSalesReport",
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

export default useFinishedSalesReportHook;
