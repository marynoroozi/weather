import { Box, Paper } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { weatherService } from "../../services/weather-service";
import { iconUrl } from "../../helper/iconUrl";
import { temperatureConvert } from "../../helper/temperatureConvert";
import { weatherModel } from "../../models/weather";
import { formatUTCToLocalTime } from "../../helper/formatLocalTime";
import { ForecastType } from "../../models/forecast";
import { useStyles } from "./style";
import ReactSimplyCarousel from "react-simply-carousel";
import { formatDate } from "../../helper/formatDate";

interface IProps {
  selectedCity: weatherModel;
  timeZone: number;
}

const Forecast = (props: IProps) => {
  const classes = useStyles;
  const [hourlyForecast, setHourlyForecast] = useState<Array<ForecastType>>();

  const getForecast = useCallback(async () => {
    try {
      const lat = props.selectedCity.coord.lat;
      const lon = props.selectedCity.coord.lon;
      const res = await weatherService.forecast(lat, lon);
      const limitedForecast = res.data.list.slice(0, 30);
      setHourlyForecast(limitedForecast);
    } catch (error) {
      console.error(error);
    }
  }, [props.selectedCity]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  useEffect(() => {
    getForecast();
  }, [getForecast]);

  return (
    <Box sx={classes.container}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#349599",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            marginTop: "104px",
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            fontSize: "20px",
            background: "#349599",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
            marginTop: "104px",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 8,
            itemsToScroll: 2,
            minWidth: 769,
          },
          {
            itemsToShow: 4,
            itemsToScroll: 2,
            minWidth: 400,
            maxWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <Box sx={classes.column}>
          <h5 style={classes.centeredText}>
            <p>Now</p>
            <span>{formatDate(props.selectedCity.dt)}</span>
          </h5>
          <Box sx={classes.forecastBox}>
            <Paper sx={classes.papernow} elevation={2}>
              <h3 style={{ ...classes.centeredText, ...classes.marginBottom }}>
                {temperatureConvert(props.selectedCity.main.temp)}&deg;
              </h3>
              <img
                src={iconUrl(props.selectedCity.weather[0]?.icon)}
                alt="weather icon"
              />
            </Paper>
          </Box>
        </Box>

        {hourlyForecast?.map((item, index: number) => (
          <Box key={index} sx={classes.column}>
            <h5 style={classes.centeredText}>
              <p>{formatUTCToLocalTime(item.dt, props.timeZone)}</p>
              <span>{formatDate(item.dt)}</span>
            </h5>
            <Box sx={classes.forecastBox}>
              <Paper sx={classes.paper} elevation={2}>
                <h3
                  style={{ ...classes.centeredText, ...classes.marginBottom }}
                >
                  {temperatureConvert(item.main.temp)}&deg;
                </h3>
                <img src={iconUrl(item.weather[0]?.icon)} alt="weather icon" />
              </Paper>
            </Box>
          </Box>
        ))}
      </ReactSimplyCarousel>
    </Box>
  );
};

export default Forecast;
