import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(false);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
