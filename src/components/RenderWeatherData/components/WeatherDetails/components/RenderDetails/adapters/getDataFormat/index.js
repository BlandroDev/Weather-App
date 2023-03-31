export const getDataFormat = (currentWeather) => {
  return [
    {
      name: "Humedad",
      value: `${currentWeather.main.humidity}%`,
      key: 1,
    },
    {
      name: "Sensacion Real",
      value: `${Math.round(currentWeather.main.feels_like)}°C`,
      key: 2,
    },

    {
      name: "Máx/Min",
      value: `${Math.round(currentWeather.main.temp_max)}°C/${Math.round(
        currentWeather.main.temp_min
      )}°C`,
      key: 3,
    },
    {
      name: "Visibilidad",
      value: `${Math.round(currentWeather.visibility / 1000)}km`,
      key: 4,
    },
    {
      name: "Presion",
      value: `${currentWeather.main.pressure}hPa`,
      key: 5,
    },
    {
      name: "Viento",
      value: `${Math.round(currentWeather.wind.speed * 3.6)}km/h`,
      key: 6,
    },
    {
      name: "Nubes",
      value: `${currentWeather.clouds.all}%`,
      key: 7,
    },
  ];
};
