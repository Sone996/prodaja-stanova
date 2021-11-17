import { api } from "../../api/Api";
import queryString from "query-string";
import { IReportsFullFilters } from "../../types/types";

const ROUTES = {
  STATUS_REPORT: "/report/apartments_number/statuses",
  SOLD_APARTMENTS_REPORT: "/report/sold_apartments/price_difference",
  FINISHED_SALES_REPORT: "report/realized_purchases",
  NOT_FINISHED_SALES_REPORT: "report/customer/potential_apartments",
};

class ReportsRepo {
  fetchStatusReport(filters: { start_date: string; end_date: string } | null) {
    if (filters) {
      const query = queryString.stringify(filters, {
        skipNull: true,
        skipEmptyString: true,
      });
      const URL = `${ROUTES.STATUS_REPORT}?${query}`;
      return api.get(URL);
    }
    return api.get(ROUTES.STATUS_REPORT);
  }

  fetchSoldApartmentsReport(
    filters: { start_date: string; end_date: string } | null
  ) {
    if (filters) {
      const query = queryString.stringify(filters, {
        skipNull: true,
        skipEmptyString: true,
      });
      const URL = `${ROUTES.SOLD_APARTMENTS_REPORT}?${query}`;
      return api.get(URL);
    }
    return api.get(ROUTES.SOLD_APARTMENTS_REPORT);
  }

  fetchFinishedSalesReport(filters: IReportsFullFilters | null | undefined) {
    if (filters) {
      const query = queryString.stringify(filters, {
        skipNull: true,
        skipEmptyString: true,
      });
      const URL = `${ROUTES.FINISHED_SALES_REPORT}?${query}`;
      return api.get(URL);
    }
    return api.get(`${ROUTES.FINISHED_SALES_REPORT}`);
  }

  fetchNotFinishedSalesReport(filters: IReportsFullFilters | null | undefined) {
    if (filters) {
      const query = queryString.stringify(filters, {
        skipNull: true,
        skipEmptyString: true,
      });
      const URL = `${ROUTES.NOT_FINISHED_SALES_REPORT}?${query}`;
      return api.get(URL);
    }
    return api.get(ROUTES.NOT_FINISHED_SALES_REPORT);
  }
}

export const reportsRepo = new ReportsRepo();
