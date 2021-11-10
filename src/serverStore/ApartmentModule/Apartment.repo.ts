import { api } from "../../api/Api";
import queryString from "query-string";
const ROUTES = {
  APARTMENTS: "/apartment",
};

class ApartmentRepo {
  fetchApartments(
    filters: {
      status: null | string;
      square_footage: null | string;
    } | null
  ) {
    if (filters === null) {
      return api.get(ROUTES.APARTMENTS);
    }
    const query = queryString.stringify(filters, {
      skipNull: true,
      skipEmptyString: true,
    });
    const URL = `${ROUTES.APARTMENTS}?${query}`;
    return api.get(URL);
  }

  fetchSingleApartment(id: string) {
    const URL = `${ROUTES.APARTMENTS}/${id}`;
    return api.get(URL);
  }

  newApartment(data: any) {
    return api.post(ROUTES.APARTMENTS, data);
  }

  editApartment(data: any) {
    const URL = `${ROUTES.APARTMENTS}/${data.id}`;
    return api.patch(URL, data.data);
  }
}

export const apartmentRepo = new ApartmentRepo();
