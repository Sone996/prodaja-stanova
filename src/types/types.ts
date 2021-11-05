export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  first_name: string;
  last_name: string;
  role: string;
  username: string;
  password: string;
  password_confirm: string;
}

export interface ILoggedUser {
  date_of_creation: string;
  date_of_update: string;
  deleted: boolean;
  email: string;
  id: number;
  name: string;
  password: string;
  role: string;
  "session-id": string;
}

export interface IProfileData {
  name: string;
  last_name: string;
  username: string;
  password: string;
  repeatPassword: string;
}

export interface ISingleApartmentData {
  id: number;
  lamela: number;
  square: number;
  rooms: number;
  flor: number;
  balcony: number;
  status: string;
  price: number;
  orijentation: string;
}

export interface IBasicClient {
  type: string;
  name: string;
  email: string;
  tel: string;
  pib_jmbg: string;
  adress: string;
  date_of_visit: null | string;
  status: string;
  note: string;
}

export interface ISelectOption {
  value: string;
  label: string;
}

export interface IInputAndLabel {
  label: string;
  name: string;
  errors: any;
  type: string;
}

export interface IApartment {
  lamela: string | number;
  square: string | number;
  rooms: string | number;
  flor: string | number;
  orijentation: string | number;
  balcony: string | number;
  price: string | number;
  status: string | number;
  photo: any;
}

export interface IModal {
  name: string;
  status: boolean;
  data: any;
}

export interface INewUserModal {
  name: string;
  last_name: string;
  role: string;
  password: string;
}
