const { urlAirPollution, url } = require("helpers");

export const getData = ({ endpoint, setWeatherData, key }) => {
  let weatherData = {};
  fetch(endpoint)
    .then((response) => response.json())
    .then((response) => {
      if (response.cod === 200) {
        weatherData.currentWeather = response;
        const endpointCurrentWeather = url(
          key,
          response.coord.lat,
          response.coord.lon
        );
        return fetch(endpointCurrentWeather);
      }
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.cod === "200") {
        weatherData.forecast3Hours = response;
        const endpointAirPollution = urlAirPollution(
          key,
          response.city.coord.lat,
          response.city.coord.lon
        );
        return fetch(endpointAirPollution);
      }
    })
    .then((response) => response.json())
    .then((response) => {
      weatherData.airData = response;
      weatherData.error = false;
    })
    .catch((error) => {
      console.log(error.message);
      error.message === "Failed to fetch"
        ? (weatherData.notFound = "Sin Conexion")
        : (weatherData.notFound = "No se encontro la ciudad");
      weatherData.error = true;
    })
    .finally(() => {
      setWeatherData(weatherData);
    });
};
