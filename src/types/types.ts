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
  lamella: number | string;
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
  balconies: string;
  date_of_creation?: Date;
  date_of_update?: Date;
  deleted?: boolean;
  floor: number | string;
  id: number | string;
  lamella: string;
  orientation: string;
  photo: string | null;
  price: number | string;
  rooms: number | string;
  square_footage: number | string;
  status: string;
}

export interface IApartmenttt {
  balconies: string;
  date_of_creation?: Date;
  date_of_update?: Date;
  deleted?: boolean;
  floor: number | string;
  id?: number | string;
  lamella: string;
  orientation: string;
  photo: string | null;
  price: number | string;
  rooms: number | string;
  square_footage: number | string;
  status: string;
}

export interface IModal {
  name: string;
  status: boolean;
  data: any;
}

export interface INewUserModal {
  id?: number;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
  password: string;
}

export interface IUserForEdit {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
}
