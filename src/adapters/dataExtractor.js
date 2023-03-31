export const dataExtractor = ({
  weatherData,
  currentWeather,
  airData,
  error,
  home = true,
}) => {
  const { list } = weatherData.forecast3Hours;
  return {
    country: currentWeather.sys.country,
    city: currentWeather.name,
    temp: currentWeather.main.temp,
    max: currentWeather.main.temp_max,
    min: currentWeather.main.temp_min,
    weather: currentWeather.weather[0].description,
    list: list,
    weatherData: weatherData,
    main: currentWeather.weather[0].main,
    date: currentWeather.dt,
    timezone: currentWeather.timezone,
    airData: airData.list[0],
    home: home,
    error: error,
  };
};
