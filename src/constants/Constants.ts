import { ISelectOption } from "../types/types";

export const TOKEN_LS_NAME = "token";

export const ROLES = {
  admin: "admin",
  finance: "finance",
  sale: "sale",
};

export const roleOptions = [
  { value: "admin", label: "Admin" },
  { value: "finance", label: "Finansije" },
  { value: "salesman", label: "Prodavac" },
];

export const TypeOfClientOptions = [
  { value: "fizicko", label: "Fizičko lice" },
  { value: "pravno", label: "Pravno lice" },
];

export const statusOptions: ISelectOption[] = [
  { value: "availabel", label: "Dostupan" },
  { value: "sold", label: "Prodat" },
  { value: "reserved", label: "Rezervisan" },
];

export const orijentationOptions: ISelectOption[] = [
  { value: "N", label: "Sever" },
  { value: "S", label: "Jug" },
  { value: "W", label: "Zapad" },
  { value: "E", label: "Istok" },
];
