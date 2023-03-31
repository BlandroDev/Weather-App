import { getData } from "services/getData";
import { useContext, useEffect } from "react";
import WeatherContext from "../../Context/WeatherContext";
import { key, urlCurrentWeather } from "../../helpers";

export const useGetWeatherDataContext = ({ position }) => {
  const { setWeatherData, weatherData } = useContext(WeatherContext);

  useEffect(() => {
    if (position !== null && position !== "unaccepted" && !weatherData) {
      const endpoint = urlCurrentWeather(key, position.lat, position.long);
      getData({ endpoint, setWeatherData, key });
    } else if (position === "unaccepted" && !weatherData) {
      setWeatherData(position);
    }
  }, [position, setWeatherData, weatherData]);

  return {
    weatherData,
  };
};
