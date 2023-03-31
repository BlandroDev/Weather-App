import WeatherContext from "Context/WeatherContext";
import { useContext, useEffect, useState } from "react";
const useGetPosition = () => {
  const { weatherData } = useContext(WeatherContext);
  const [position, setPosition] = useState(null);

  const currentPosition = navigator.geolocation;

  const error = () => {
    setPosition("unaccepted");
  };
  const getPosition = (response) => {
    const lat = response.coords.latitude;
    const long = response.coords.longitude;
    setPosition({
      lat: lat,
      long: long,
    });
  };
  useEffect(() => {
    if (!weatherData) {
      currentPosition.getCurrentPosition(getPosition, error);
    }
  }, [currentPosition, weatherData]);

  return { position };
};

export default useGetPosition;
