import { ERROR_CODES, SUCCESS_CODES } from "../constants/Messages";

export const notificationMsg = (response: any, codeKey: any | null) => {
  if (response && response.status === 200) {
    if (!codeKey) {
      return "Success!";
    }
    return SUCCESS_CODES[codeKey];
  }
  if (response && response.response && response.response.data.error) {
    return ERROR_CODES[response.response.data.error];
  } else {
    return "Something's Wrong!";
  }
};
