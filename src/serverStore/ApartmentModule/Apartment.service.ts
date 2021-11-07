import { omit } from "lodash";
import { apartmentRepo } from "./Apartment.repo";

class ApartmentService {
  fetchApartments() {
    return apartmentRepo.fetchApartments();
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
