import { makeAutoObservable } from "mobx";

export class FiltersStore {
  // STATE
  apartmentFilters: { status: string; square_footage: string } = {
    status: "",
    square_footage: "",
  };
  apartmentSortByPrice = false;
  // END :: STATE

  constructor() {
    makeAutoObservable(this);
  }

  //   COMPUTED
  get getApartmentFilters() {
    return this.apartmentFilters;
  }
  get getApartmentSortByPrice() {
    return this.apartmentSortByPrice;
  }
  // END :: COMPUTED

  //   ACTIONS
  setApartmentFilters = (data: any) => {
    this.apartmentFilters = data;
  };
  setApartmentSortByPrice = (data: any) => {
    this.apartmentSortByPrice = data;
  };
  // END :: ACTIONS
}
