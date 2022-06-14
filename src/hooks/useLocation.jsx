import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({
    succes: false,
    loc: {
      lat: 0,
      lon: 0,
    },
  });

  const getLocation = () => {
    if ("geolocation" in navigator) {
      const onSucces = (loc) => {
        setLocation({
          succes: true,
          loc: {
            lat: loc.coords.latitude,
            lon: loc.coords.longitude,
          },
        });
      };
      const onError = (err) => {
        return setLocation({
          succes: false,
          loc: {
            lat: 0,
            lon: 0,
          },
        });
      };

      const optionLoc = {
        enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 10000, // Esperar solo 5 segundos
      };

      navigator.geolocation.getCurrentPosition(onSucces, onError, optionLoc);
    } else return console.log("No tiene soporte");
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location };
};

export default useLocation;
