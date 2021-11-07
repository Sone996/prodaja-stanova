import { ISelectOption } from "../types/types";

export const TOKEN_LS_NAME = "token";

export const ROLES = {
  admin: "admin",
  finance: "finance",
  sale: "sale",
};

export const roleOptions: ISelectOption[] = [
  { value: "admin", label: "Admin" },
  { value: "finance", label: "Finansije" },
  { value: "salesman", label: "Prodavac" },
];

export const TypeOfClientOptions: ISelectOption[] = [
  { value: "fizicko", label: "Fizičko lice" },
  { value: "pravno", label: "Pravno lice" },
];

export const statusOptions: ISelectOption[] = [
  { value: "available", label: "Dostupan" },
  { value: "sold", label: "Prodat" },
  { value: "reserved", label: "Rezervisan" },
];

export const orijentationOptions: ISelectOption[] = [
  { value: "north", label: "Sever" },
  { value: "south", label: "Jug" },
  { value: "west", label: "Zapad" },
  { value: "east", label: "Istok" },
];
