import { omit } from "lodash";
import { apartmentRepo } from "./Apartment.repo";

class ApartmentService {
  fetchApartments(filters: {
    status: null | string;
    square_footage: null | string;
  }) {
    if (filters.status === null && filters.square_footage === null) {
      return apartmentRepo.fetchApartments(null);
    }
    return apartmentRepo.fetchApartments(filters);
  }

  fetchSingleApartment(id: string) {
    return apartmentRepo.fetchSingleApartment(id);
  }

  newApartment(data: any) {
    return apartmentRepo.newApartment(data);
  }

  editApartment(data: any) {
    return apartmentRepo.editApartment({
      id: data.id,
      data: omit(data, ["id", "date_of_creation", "date_of_update", "deleted"]),
    });
  }
}

export const apartmentService = new ApartmentService();
