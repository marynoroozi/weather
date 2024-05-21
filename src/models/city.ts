import { Base } from "./base";
import { weatherModel } from "./weather";

export interface cityModel extends Base {
  name: string;
  local_names: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
  weatherData?: weatherModel;
}
