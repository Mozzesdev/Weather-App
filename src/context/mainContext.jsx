import { createContext, useContext, useState } from "react";

const mainContext = createContext({});

export const useMain = () => {
  const context = useContext(mainContext);
  return context;
};

export const MainProvider = ({ children }) => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <mainContext.Provider
      value={{
        city,
        setCity,
        weather,
        setWeather,
        loading,
        setLoading,
        setError,
        error,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
