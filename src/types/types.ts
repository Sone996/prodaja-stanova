export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
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
