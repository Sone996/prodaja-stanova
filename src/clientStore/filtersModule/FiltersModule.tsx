import { makeAutoObservable } from "mobx";
import { IClientFilters } from "../../types/types";

export class FiltersStore {
  // STATE
  apartmentFilters: { status: string; square_footage: string } = {
    status: "",
    square_footage: "",
  };
  clientFilters: IClientFilters = {
    type: "",
    id: "",
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
  get getClientFilters() {
    return this.clientFilters;
  }
  // END :: COMPUTED

  //   ACTIONS
  setApartmentFilters = (data: any) => {
    this.apartmentFilters = data;
  };
  setApartmentSortByPrice = (data: any) => {
    this.apartmentSortByPrice = data;
  };
  setClientFilters = (data: any) => {
    this.clientFilters = data;
  };
  // END :: ACTIONS
}
