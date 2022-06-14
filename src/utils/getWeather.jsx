import axios from "axios";
import { DateTime } from "luxon";

// const API_KEY = "4918cb8b336e6617914c305e7d87c289";
const API_KEY = "1fa9ff4126d95b8db54f3897a208e91c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const data = await axios.get(url);
  return data.data;
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    clouds: { all },
  } = data;

  const { main: details, icon, description } = weather[0];

  return {
    lat,
    lon,
    temp,
    description,
    all,
    pressure,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily.slice(0, 7).map((d) => {
    return {
      ...d,
      title: formatToLocalTime(d.dt, timezone, "cccc"),
      icon: d.weather[0].icon,
      description: d.weather[0].description,
    };
  });

  hourly = hourly.map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const getFormatWeatherData = async (searchParams) => {
  const formatCurrent = await getWeather("weather", searchParams).then(
    formatCurrentWeather
  );

  const { lat, lon } = formatCurrent;

  const formatForecast = await getWeather("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formatCurrent, ...formatForecast };
};

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormatWeatherData;

export { formatToLocalTime, iconUrlFromCode };
