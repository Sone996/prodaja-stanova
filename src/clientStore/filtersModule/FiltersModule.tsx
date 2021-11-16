import { makeAutoObservable } from "mobx";
import {
  IApartmentFilters,
  IClientFilters,
  IUserFilters,
} from "../../types/types";

export class FiltersStore {
  // STATE
  apartmentFilters: IApartmentFilters = {
    status: "",
    square_footage: "",
  };
  clientFilters: IClientFilters = {
    type: "",
    id: "",
  };
  userFilters: IUserFilters = {
    role: "",
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

  get getUserFilters() {
    return this.userFilters;
  }
  // END :: COMPUTED

  //   ACTIONS
  setApartmentFilters = (data: { status: string; square_footage: string }) => {
    this.apartmentFilters = data;
  };
  setApartmentSortByPrice = (data: boolean) => {
    this.apartmentSortByPrice = data;
  };
  setClientFilters = (data: IClientFilters) => {
    this.clientFilters = data;
  };
  setUserFilters = (data: IUserFilters) => {
    this.userFilters = data;
  };
  // END :: ACTIONS
}
