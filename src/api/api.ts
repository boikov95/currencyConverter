import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.cbr-xml-daily.ru/",
});

type converterReturnType = {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: any;
  error?: string;
  code?: string;
  explanation?: string;
};

export const API = {
  getAmount() {
    return instance
      .get<converterReturnType>("/daily_json.js")
      .then((response) => response.data);
  },
};
