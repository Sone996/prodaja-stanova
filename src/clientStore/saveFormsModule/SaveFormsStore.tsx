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
  // END :: STATE

  constructor() {
    makeAutoObservable(this);
  }

  //   COMPUTED
  get getEditApartment() {
    return this.editApartment;
  }
  // END :: COMPUTED

  //   ACTIONS
  setEditApartment = (data: any) => {
    this.editApartment = data;
  };
  // END :: ACTIONS
}
