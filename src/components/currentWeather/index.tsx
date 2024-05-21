import Forecast from "../forecast";
import { Divider, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import { weatherService } from "../../services/weather-service";
import { weatherModel } from "../../models/weather";
import { cityModel } from "../../models/city";
import { formatDate } from "../../helper/formatDate";
import WeatherDetails from "../weatherDetails";
import { iconUrl } from "../../helper/iconUrl";
import { temperatureConvert } from "../../helper/temperatureConvert";
import { useStyles } from "./style";

interface IProps {
  city?: cityModel;
  weatherData: (e: weatherModel) => void;
}

const CurrentWeather = (props: IProps) => {
  const classes = useStyles;
  const [weatherData, setWeatherData] = useState<weatherModel | null>(null);
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  useEffect(() => {
    getWeatherData();
  }, [props.city]);

  const getWeatherData = async () => {
    const cityName =
      props.city && props.city.name ? props.city.name : "Toronto";
    try {
      const res = await weatherService.getData(`${cityName}`);
      setWeatherData(res.data);
      props.weatherData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (weatherData) {
      convertUTCToLocal();
    }
  }, [weatherData]);

  const convertUTCToLocal = () => {
    if (!weatherData) return;
    const formattedDate = formatDate(weatherData.dt);
    setCurrentDate(formattedDate);
  };

  return (
    <>
      {weatherData ? (
        <>
          <Grid container spacing={2} sx={classes.gridContainat}>
            <Grid
              item
              xs={12}
              md={3}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  item
                  textAlign="center"
                  justifyContent="center"
                  alignItems="center"
                >
                  <p className="shadow">Today</p>
                  <p className="shadow">
                    {currentDate ? currentDate : "Loading..."}
                  </p>
                </Grid>
                <img
                  src={iconUrl(weatherData.weather[0].icon)}
                  alt="Weather Icon"
                />
              </Grid>
              <Grid item sx={{ my: 2, fontSize: "45px" }}>
                {temperatureConvert(weatherData.main.temp)} &deg;
              </Grid>
              <Grid item sx={{ my: 2, fontSize: "25px" }}>
                <LocationOnIcon />
                {weatherData.name},{weatherData.sys.country}
              </Grid>
            </Grid>
            <Grid item xs={12} md={9} sx={classes.forcast}>
              <Forecast
                selectedCity={props.city?.weatherData || weatherData}
                timeZone={props.city?.weatherData?.timezone || -14400}
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />
          <WeatherDetails weatherData={weatherData} />
        </>
      ) : (
        "Loading ..."
      )}
    </>
  );
};

export default CurrentWeather;
