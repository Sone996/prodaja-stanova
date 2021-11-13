import { makeAutoObservable } from "mobx";
import { IApartmenttt } from "../../types/types";

// ovaj modul sluzi za cuvanje podataka u slucaju pormene taba

export class SaveFormsStore {
  // STATE
  editApartment: IApartmenttt = {
    id: "",
    lamella: "",
    square_footage: "",
    rooms: "",
    floor: "",
    orientation: "",
    balconies: "",
    price: "",
    status: "",
    photo: null,
  };
  idsForContract: any = {
    apartment_id: null,
    contract_id: null,
    client_id: null,
  };
  // END :: STATE

  constructor() {
    makeAutoObservable(this);
  }

  //   COMPUTED
  get getEditApartment() {
    return this.editApartment;
  }
  get getIdsForContract() {
    return this.idsForContract;
  }
  // END :: COMPUTED

  //   ACTIONS
  setEditApartment = (data: any) => {
    this.editApartment = data;
  };
  setIdsForContract = (data: any) => {
    this.idsForContract = data;
  };
  // END :: ACTIONS
}
