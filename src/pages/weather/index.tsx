import { useState } from "react";
import CurrentWeather from "../../components/currentWeather";
import SearchFilter from "../../components/search";
import { Box } from "@mui/material";
import { cityModel } from "../../models/city";
import { weatherModel } from "../../models/weather";

const Weather = () => {
  const [selectedCity, setSelectedCity] = useState<cityModel>();
  const [weatherState, setWeatherState] = useState("");
  const [temp, setTemp] = useState(localStorage.getItem('temp'));

  const getCity = (val: cityModel) => {
    setSelectedCity(val);
  };

  const weatherData = (weatherVal: weatherModel) => {
    if (weatherVal) {
      setWeatherState(weatherVal.weather[0].main);
    }
  };

  return (
    <>
      <div
        className="weather-state"
        style={{ background: `url('/img/${weatherState}.jpg')` }}
      ></div>
      <Box sx={{ width: "85%", mx: "auto" }}>
        <SearchFilter
          setTemp={setTemp}
          cityName={(value: cityModel) => getCity(value)}
        />
        <CurrentWeather
          city={selectedCity}
          weatherData={(data: weatherModel) => weatherData(data)}
        />
      </Box>
    </>
  );
};

export default Weather;
