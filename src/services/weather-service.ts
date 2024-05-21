import { instance } from "./index";

export const weatherService = {
  getData: (city: string) =>
    instance({
      method: "GET",
      url: `data/2.5/weather?q=${city}&units=metric&APPID=1a4b703004f731628c00fb9a12ede905`,
    }),
  search: (city: string) =>
    instance({
      method: "GET",
      url: `geo/1.0/direct?q=${city}&limit=5&appid=1a4b703004f731628c00fb9a12ede905`,
    }),
  flag: (country: string) =>
    instance({
      method: "GET",
      url: `images/flags/${country}`,
    }),
  forecast: (lat: number, lon: number) =>
    instance({
      method: "GET",
      url: `data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=1a4b703004f731628c00fb9a12ede905`,
    }),
};
