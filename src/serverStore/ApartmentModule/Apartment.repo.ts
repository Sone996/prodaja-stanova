import { api } from "../../api/Api";
const ROUTES = {
  APARTMENTS: "/apartment",
};

class ApartmentRepo {
  fetchApartments() {
    return api.get(ROUTES.APARTMENTS);
  }

  fetchSingleApartment(id: string) {
    const URL = `${ROUTES.APARTMENTS}/${id}`;
    return api.get(URL);
  }

  newApartment(data: any) {
    return api.post(ROUTES.APARTMENTS, data);
  }

  editApartment(data: any) {
    console.log(data);
    const URL = `${ROUTES.APARTMENTS}/${data.id}`;
    console.log(URL);
    return api.patch(URL, data.data);
  }
}

export const apartmentRepo = new ApartmentRepo();
