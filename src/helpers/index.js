export const key = "4270adb761de667a5dcc5f5db6f96940";

export const url = (key, lat, long, lang = "es", units = "metric", cnt = "9") =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&lang=${lang}&units=${units}&cnt=${cnt}`;

export const urlCurrentWeather = (
  key,
  lat,
  long,
  lang = "es",
  units = "metric"
) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&lang=${lang}&units=${units}`;

export const urlCurrentWeatherSearch = (
  key,
  city,
  lang = "es",
  units = "metric"
) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}&units=${units}`;

export const urlAirPollution = (key, lat, long) =>
  `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${key}`;
