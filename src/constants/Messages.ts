interface iCodes {
  [key: string]: string;
}

export const ERROR_CODES: iCodes = {
  ERR_MISSING_SESSION_ID: "Pogrešan Id sesije",
  ERR_SESSION_NOT_VALID: "Sesija je Istekla",
  ERR_BAD_ROLE: "Pogrešna rola",
  ERR_BAD_CREDENTIALS: "Loši kredencijali",
  ERR_TOKEN_EXPIRED: "Sesija je istekla",
  ERR_BAD_USER_ID: "Pogrešan Id korisnika",
  ERR_BAD_SESSION_ID: "Pogrešan Id sesije",
  ERR_BAD_CUSTOMER_ID: "Pogrešan Id klijenta",
  ERR_BAD_APARTMENT_ID: "Pogrešan Id stana",
  ERR_CONTRACT_ALREADY_EXISTS: "Ugovor već postoji",
  ERR_BAD_PASSWORD_CONFIRMATION: "Loyinke se ne poklapaju",
  ERR_USERNAME_ALREADY_EXISTS: "Korisničko ime već postoji",
  ERR_USER_CANT_EDIT: "Korisnik ne može biti izmenjen",
  ERR_DUPLICATED_USERNAME: "Duplo korisničko ime",
  ERR_BAD_CONTRACT_ID: "Pogrešan Id ugovora",
  ERR_PRICE_NOT_APPROVED: "Cena nije odobrena",
  ERR_BAD_ROLE_FOR_APPROVING: "Ova rola nema prava da odobri ugovor",
  ERR_APARTMENT_NOT_AVAILABLE: "Stan nije dostupan",
};

export const SUCCESS_CODES: iCodes = {
  lOGIN_SUCCESS: "Uspešan login",
  REGISTER_SUCCESS: "Uspešna registracija",
  USER_CREATED: "Korisnik uspešno kreiran",
  USER_EDITED: "Korisnik uspešno izmenjen",
  USER_DELETED: "Korisnik uspešno obrisan",
  APARTMENT_CREATED: "Stan  uspešno kreiran",
  APARTMENT_EDITED: "Stan uspešno izmenjen",
  APARTMENT_DELETED: "Stan  uspešno obrisan",
  CLIENT_CREATED: "Klijent uspešno kreiran",
  CLIENT_EDITED: "Klijent uspešno izmenjen",
  CLIENT_DELETED: "Klijent uspešno obrisan",
  PRE_CONTRACT_MADE: 'Predugovor je kreiran',
};
