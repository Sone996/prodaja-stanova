import { makeAutoObservable } from "mobx";
import { IApartmenttt, IIdsForContract } from "../../types/types";

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
    photo: null,
  };
  idsForContract: IIdsForContract = {
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
  setEditApartment = (data: IApartmenttt) => {
    this.editApartment = data;
  };
  setIdsForContract = (data: IIdsForContract) => {
    this.idsForContract = data;
  };

  setEditApartmentDefault = () => {
    this.editApartment = {
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
  };
  // END :: ACTIONS
}
