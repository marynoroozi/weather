import { useEffect, useState } from "react";
import { weatherService } from "../../services/weather-service";
import { cityModel } from "../../models/city";
import { Paper } from "@mui/material";
import { useStyles } from "./style";

interface IProps {
  value: string;
  selectedItem: (cityModel: cityModel) => void;
}
const SearchResult = ({ value, selectedItem }: IProps) => {
  const [city, setCity] = useState<Array<cityModel>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const classes = useStyles;
  useEffect(() => {
    if (value) {
      searchData();
    }
  }, [value]);

  const searchData = async () => {
    try {
      setLoading(true);
      const res = await weatherService.search(value);
      const cities = res.data;

      // Filter out invalid cities
      const validCities = cities.filter(
        (city: cityModel) => city && city.name && city.country
      );

      // Remove duplicates
      const uniqueCities = Array.from(
        new Map(
          validCities.map((city: cityModel) => [
            `${city.name},${city.country}`,
            city,
          ])
        ).values()
      );

      // Fetch weather data for each valid city
      const citiesWithWeatherData = await Promise.all(
        uniqueCities.map(async (city: any) => {
          try {
            const weatherRes = await weatherService.getData(
              `${city.name},${city.country}`
            );
            city.weatherData = weatherRes.data;
            return city;
          } catch (error) {
            console.error(
              `Error fetching weather data for ${city.name}, ${city.country}:`,
              error
            );
            return null; // Return null for cities without weather data
          }
        })
      );

      // Filter out cities that do not have weather data
      const citiesWithValidWeatherData = citiesWithWeatherData.filter(
        (city) => city !== null
      );

      setCity(citiesWithValidWeatherData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching city data:", error);
      setLoading(false);
    }
  };

  const getCurrentWeather = (item: cityModel) => {
    selectedItem(item);
    setCity([]);
  };

  return (
    <>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="result-search">
            {city.map((item, index) => (
              <li
                onClick={() => getCurrentWeather(item)}
                key={index}
              >
                <span>
                  {item.name}, {item.country}
                </span>
                <span>
                  <img
                    src={`https://openweathermap.org/images/flags/${item.country.toLowerCase()}.png`}
                    alt="flag img"
                  />
                </span>
                <span>
                  {item.weatherData && (
                    <>
                      <span> - Temp: {item.weatherData.main.temp}°C</span>
                      <span> - {item.weatherData.weather[0].description}</span>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
    </>
  );
};

export default SearchResult;
