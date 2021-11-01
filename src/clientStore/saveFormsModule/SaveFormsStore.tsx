import { makeAutoObservable } from "mobx";

// ovaj modul sluzi za cuvanje podataka u slucaju pormene taba

export class SaveFormsStore {
  // STATE
  editApartment = {
    lamela: "",
    square: "",
    rooms: "",
    flor: "",
    orijentation: "",
    balcony: "",
    price: "",
    status: "",
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
