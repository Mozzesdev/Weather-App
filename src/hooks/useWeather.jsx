import { useEffect, useState } from "react";
import { useMain } from "../context/mainContext";
import getFormatWeatherData from "../utils/getWeather";
import useLocation from "./useLocation";

const useWeather = () => {
  const { location } = useLocation();
  const {weather, city, setWeather, setLoading, loading, error, setError} = useMain()

  const locSucces = location.succes;
  const loc = location.loc;

  useEffect(() => {
    setLoading(true);
    if (locSucces && !city) {
      getFormatWeatherData({ ...loc, units: "metric" }).then((data) => {
        setWeather(data);
        setLoading(false);
      });
    }else{
      getFormatWeatherData({ q: "New York", units: "metric" }).then((data) => {
        setWeather(data);
        setLoading(false);
      }).catch((e)=>{
        setLoading(false)
        setError(true)
      });
    }
  }, [loc, city, error]);

  useEffect(() => {
    setLoading(true);
    if (city) {
      getFormatWeatherData({ q: city, units: "metric" }).then((data) => {
        setWeather(data);
        setLoading(false);
      });
    }
  }, [city]);

  return { weather, loading, locSucces, error,setError };
};

export default useWeather;
