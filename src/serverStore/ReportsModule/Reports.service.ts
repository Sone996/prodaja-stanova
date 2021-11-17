import { IReportsFullFilters } from "../../types/types";
import { reportsRepo } from "./Report.repo";

class ReportsService {
  fetchStatusReport(filters: { start_date: string; end_date: string } | null) {
    return reportsRepo.fetchStatusReport(filters);
  }
  fetchSoldApartmentsReport(
    filters: { start_date: string; end_date: string } | null
  ) {
    return reportsRepo.fetchSoldApartmentsReport(filters);
  }
  finishedSalesReport(filters: IReportsFullFilters | null | undefined) {
    return reportsRepo.fetchFinishedSalesReport(filters);
  }
  fetchNotFinishedSalesReport(filters: IReportsFullFilters | null | undefined) {
    return reportsRepo.fetchNotFinishedSalesReport(filters);
  }
}

export const reportsService = new ReportsService();
