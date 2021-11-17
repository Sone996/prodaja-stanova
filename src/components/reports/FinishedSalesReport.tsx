import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import Scroll from "../ui/Scroll";
import SimpleTable from "../ui/SimpleTable";
import useFinishedSalesReportHook from "../../customHooks/reportsHook/useFinishedSalesReportHook";
import {
  IDateFilters,
  IParsedFinishedSales,
  IReportsFullFilters,
} from "../../types/types";

const titles = [
  "Id prodaje",
  "Id kupca",
  "Id prodavca",
  "Broj ugovora",
  "Ime kupca",
  "Ime prodavca",
  "Datum kreiranja",
  "Cena",
];

const FinishedSalesReport: FC = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [userId, setUserId] = useState<string>("");
  const [filters, setFilters] = useState<IDateFilters | null>(null);
  const [allFilters, setAllFilters] = useState<IReportsFullFilters | null>();
  const [startDate, endDate] = dateRange;
  const report = useFinishedSalesReportHook(allFilters);

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

  const inputLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const allFiltersHandler = () => {
    setAllFilters({
      customer_id: userId,
      start_date: filters?.start_date,
      end_date: filters?.end_date,
    });
  };

  const singleView = (item: IParsedFinishedSales) => {
    console.log(item);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex justify-between w-full">
        <span className="text-2xl px-6 py-2">
          Izveštaj o ostvarenim kupovinama jednog klijenta za period
        </span>
      </div>
      <div className="flex items-center w-full justify-center">
        <div className="flex w-1/2 border ml-6 px-6 py-2 items-center justify-between">
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
          <input
            type="text"
            autoComplete="off"
            className="input"
            name="id"
            placeholder="Id..."
            value={userId}
            onChange={inputLoginHandler}
          />
          <button
            className="button bg-blue-500 w-1/4 text-white font-bold items-center"
            onClick={allFiltersHandler}
          >
            Pretraži
          </button>
        </div>
      </div>
      <div className="flex justify-center h-full">
        <div className="relative h-full w-3/4">
          {report.isLoading ? (
            <div>loading</div>
          ) : report.isError ? (
            <div>{report.error.message}</div>
          ) : report.data.lenght === 0 ? (
            <div className="flex justify-center text-xl">
              nema podataka za ove parametre
            </div>
          ) : (
            <Scroll>
              <SimpleTable
                singleView={singleView}
                model={report.data}
                titles={titles}
              />
            </Scroll>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinishedSalesReport;
