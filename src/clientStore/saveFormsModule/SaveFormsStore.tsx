import { makeAutoObservable } from "mobx";

// ovaj modul sluzi za cuvanje podataka u slucaju pormene taba

export class SaveFormsStore {
  // STATE
  // END :: STATE

  constructor() {
    makeAutoObservable(this);
  }

  //   COMPUTED
  // END :: COMPUTED

  //   ACTIONS
  // END :: ACTIONS
}
