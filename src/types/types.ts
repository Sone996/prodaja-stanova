export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  first_name: string;
  last_name: string;
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
  first_name: string;
  last_name: string;
  password: string;
  username: string;
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
  phone: string;
  pib_jmbg: string;
  address: string;
}

export interface IFullClient {
  id: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  pib_jmbg: string;
  address: string;
  date_of_creation: Date;
  date_of_update: Date;
  deleted: boolean;
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
  status?: string;
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
  password_confirm?: string;
}

export interface IUserForEdit {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
}

export interface IApartmentFilters {
  status: string;
  square_footage: string;
}

export interface IClientFilters {
  id: string;
  type: string;
}

export interface IUserFilters {
  id: string;
  role: string;
}

export interface IPreContract {
  apartment_id: number | string;
  customer_id: number;
  data: {
    payment_method: string;
    note: string;
  };
}

export interface IIdsForContract {
  apartment_id: number | string | null;
  contract_id: number | string | null;
  client_id: number | string | null;
}

export interface ILoggedUser {
  date_of_creation: string;
  date_of_update: string;
  deleted: boolean;
  first_name: string;
  id: number;
  last_name: string;
  password: string;
  role: string;
  "session-id": string;
  username: string;
}

export interface IPotentialBuyers {
  apartment_id: number;
  client_id: number;
  contract_id: number;
  date_of_creation: string;
  email: string;
  name: string;
  phone: string;
}

export interface ISingleCLientContracts {
  apartment_id: number;
  approved: boolean;
  client_id: number;
  contract_id: number;
  contract_number: string;
  date_of_creation: string;
  signed: boolean;
  status: string;
}

export interface IChooseExistingClientModal {
  address: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  type: string;
}

export interface IFullUser {
  date_of_creation: Date;
  date_of_update: Date;
  deleted: boolean;
  first_name: string;
  id: number;
  last_name: string;
  password: string;
  role: string;
  username: string;
}

export interface IEditContract {
  apartment: IApartmenttt;
  approved: boolean;
  contract_number: string;
  customer: IFullClient;
  date_of_creation: Date;
  date_of_update: Date;
  deleted: boolean;
  first_visit: string;
  id: number;
  note: string;
  payment_method: string;
  price: number;
  signed: boolean;
  status: string;
  user: IFullUser;
}

export interface IDateFilters {
  start_date: string;
  end_date: string;
}

export interface IReportsFullFilters {
  customer_id: string;
  start_date: string | undefined;
  end_date: string | undefined;
}

export interface IParsedFinishedSales {
  contract_number: string;
  customer_id: number;
  customer_name: string;
  date_of_creation: string;
  id: number;
  price: number;
  user_id: number;
  user_name: string;
}
