import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import useFetchStatusReportHook from "../../customHooks/reportsHook/useFetchStatusReportHook";

const StatusReport: FC = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [filters, setFilters] = useState<{
    start_date: string;
    end_date: string;
  } | null>(null);
  const [startDate, endDate] = dateRange;
  const statusReport = useFetchStatusReportHook(filters);

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
        <span className="text-2xl">Izveštaj o broju stanova po statusima</span>
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
        {statusReport.isLoading ? (
          <div>loading</div>
        ) : statusReport.isError ? (
          <div>{statusReport.error.message}</div>
        ) : (
          <div className="flex flex-col text-xl text-gray-700">
            <div className="flex mb-2">
              <span className="mr-1">Dostupni stanovi:</span>
              <span className="font-semibold">
                {statusReport.data[0].available}
              </span>
            </div>
            <div className="flex mb-2">
              <span className="mr-1">Rezervisani stanovi:</span>
              <span className="font-semibold">
                {statusReport.data[0].reserved}
              </span>
            </div>
            <div className="flex mb-2">
              <span className="mr-1">Prodati stanovi:</span>
              <span className="font-semibold">{statusReport.data[0].sold}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusReport;
