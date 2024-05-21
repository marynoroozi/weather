import { Grid, Paper } from "@mui/material";
import SolarPowerOutlinedIcon from "@mui/icons-material/SolarPowerOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { useEffect, useState } from "react";
import { formatUTCToLocalTime } from "../../helper/formatLocalTime";
import { iconUrl } from "../../helper/iconUrl";
import { temperatureConvert } from "../../helper/temperatureConvert";
import { weatherModel } from "../../models/weather";
import { useStyles } from "./style";

interface IProps {
  weatherData: weatherModel;
}

const WeatherDetails = (props: IProps) => {
  const classes = useStyles;

  const [sunrise, setSunrise] = useState<string | null>(null);
  const [sunset, setSunset] = useState<string | null>(null);

  useEffect(() => {
    if (props.weatherData) {
      convertUTCToLocal();
    }
  }, [props.weatherData]);

  const convertUTCToLocal = () => {
    if (!props.weatherData) return;

    const localSunrise = formatUTCToLocalTime(
      props.weatherData.sys.sunrise,
      props.weatherData.timezone
    );
    const localSunset = formatUTCToLocalTime(
      props.weatherData.sys.sunset,
      props.weatherData.timezone
    );

    setSunrise(localSunrise);
    setSunset(localSunset);
  };

  return (
    <>
      <h2>Weather Details</h2>
      
      <Grid container  sx={classes.container} spacing={2}>
      <Grid item xs={12} md={3} sm={6}>
          <Paper elevation={3} sx={classes.paper}>
            <Grid item xs={8} sx={classes.paperDetails}>
              <CardContent sx={classes.cardContent}>
                <Typography component="div">STATE</Typography>
                <Typography variant="h6" component="div">
                  {props.weatherData.weather[0].description}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} sx={classes.paperImage}>
              <img
                src={iconUrl(props.weatherData.weather[0].icon)}
                alt="Weather Icon"
                width="75px"
              />
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={3} sm={6}>
          <Paper elevation={3} sx={classes.paper}>
            <Grid item xs={8} sx={classes.paperDetails}>
              <CardContent sx={classes.cardContent}>
                <Typography component="div">SUNRISE</Typography>
                <Typography variant="h6" component="div">
                  {sunrise}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} sx={classes.paperImage}>
              <SolarPowerOutlinedIcon sx={classes.weatherIcon} />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Paper elevation={3} sx={classes.paper}>
            <Grid item xs={8} sx={classes.paperDetails}>
              <CardContent sx={classes.cardContent}>
                <Typography component="div">SUNSET</Typography>
                <Typography variant="h6" component="div">
                  {sunset}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} sx={classes.paperImage}>
              <WbTwilightOutlinedIcon sx={classes.weatherIcon} />
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} sm={6}>
          <Paper elevation={3} sx={classes.paper}>
            <Grid item xs={8} sx={classes.paperDetails}>
              <CardContent sx={classes.cardContent}>
                <Typography component="div">HUMIDITY</Typography>
                <Typography variant="h6" component="div">
                  {props.weatherData.main.humidity}%
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} sx={classes.paperImage}>
              <WaterDropIcon sx={classes.weatherIcon} />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Paper elevation={3} sx={classes.paper}>
            <Grid item xs={8} sx={classes.paperDetails}>
              <CardContent sx={classes.cardContent}>
                <Typography component="div">WIND</Typography>
                <Typography variant="h6" component="div">
                  {props.weatherData.wind.speed} km/h
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} sx={classes.paperImage}>
              <AirIcon sx={classes.weatherIcon} />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Paper elevation={3} sx={classes.paper}>
            <Grid item xs={8} sx={classes.paperDetails}>
              <CardContent sx={classes.cardContent}>
                <Typography component="div">PRESSURE</Typography>
                <Typography variant="h6" component="div">
                  {props.weatherData.main.pressure} hPa
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} sx={classes.paperImage}>
              <VerticalAlignBottomIcon sx={classes.weatherIcon} />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Paper elevation={3} sx={classes.paper}>
            <Grid item xs={8} sx={classes.paperDetails}>
              <CardContent sx={classes.cardContent}>
                <Typography component="div">FEELS LIKE</Typography>
                <Typography variant="h6" component="div">
                  {temperatureConvert(props.weatherData.main.feels_like)} &deg;
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} sx={classes.paperImage}>
              <DeviceThermostatOutlinedIcon sx={classes.weatherIcon} />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Paper elevation={3} sx={classes.paper}>
            <Grid item xs={8} sx={classes.paperDetails}>
              <CardContent sx={classes.cardContent}>
                <Typography component="div">VISIBILITY</Typography>
                <Typography variant="h6" component="div">
                  {(props.weatherData.visibility as number) / 1000} km
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} sx={classes.paperImage}>
              <VisibilityIcon sx={classes.weatherIcon} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default WeatherDetails;
