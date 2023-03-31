import { getData } from "services/getData";
import { urlCurrentWeatherSearch } from "helpers";
import { useEffect, useState } from "react";

const useSearchCity = (key, city) => {
  const [weatherData, setWeatherData] = useState(false);

  useEffect(() => {
    setWeatherData(false);
    const endpoint = urlCurrentWeatherSearch(key, city);
    if (city) getData({ setWeatherData, key, endpoint });
  }, [city, key]);
  return {
    weatherData,
  };
};

export default useSearchCity;
