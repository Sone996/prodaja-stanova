import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import useSoldApartmentReportHook from "../../customHooks/reportsHook/useSoldApartmentsReportHook";

const SoledApartmentsReport: FC = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [filters, setFilters] = useState<{
    start_date: string;
    end_date: string;
  } | null>(null);
  const [startDate, endDate] = dateRange;
  const report = useSoldApartmentReportHook(filters);

  const handleDate = (update: any) => {
    let start_date = update[0]
      ? DateTime.fromJSDate(update[0]).toFormat("yyyy-LL-dd")
      : null;
    let end_date = update[1]
      ? DateTime.fromJSDate(update[1]).toFormat("yyyy-LL-dd")
      : null;
    if (start_date && end_date) {
      setFilters({ start_date, end_date });
    }
    setDateRange(update);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center pl-6 py-2">
        <span className="text-2xl">
          Izvestaj o broju prodatih stanova za period i razlika predvidjene i
          dogovorene cene
        </span>
      </div>
      <div className="flex w-1/2 border ml-6 px-6 py-2 items-center">
        <span className="mr-4">Datum od-do:</span>
        <DatePicker
          className="border rounded py-2 border-gray-300 text-center text-gray-700"
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy"
          onChange={(update: any) => {
            handleDate(update);
          }}
          withPortal
        />
      </div>
      <div className="border rounded-md w-1/2 ml-6 px-6 py-2">
        {report.isLoading ? (
          <div>loading</div>
        ) : report.isError ? (
          <div>{report.error.message}</div>
        ) : (
          <div className="flex flex-col text-xl text-gray-700">
            <div className="flex mb-2">
              <span className="mr-1">Broj prodatih stanova:</span>
              <span className="font-semibold">
                {report.data[0].number_of_sold}
              </span>
            </div>
            <div className="flex mb-2">
              <span className="mr-1">Razlika dogovrena/ostvarena cena:</span>
              <span className="font-semibold">
                {report.data[0].price_difference}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SoledApartmentsReport;
