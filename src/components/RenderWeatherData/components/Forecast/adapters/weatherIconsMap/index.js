import {
  clear,
  clouds,
  drizzle,
  alert,
  thunderstorm,
  rain,
  snow,
  cloudsNight,
  clearNight,
} from "assets/icons/weather/icons";

export const dayIcons = ({ type }) => {
  const types = {
    Clear: clear,
    Clouds: clouds,
  };

  return (
    <img src={`${types[type]}`} alt={type} className="Forecast__img--hourBox" />
  );
};

export const globalIcons = ({ type }) => {
  const types = {
    Thunderstorm: thunderstorm,
    Rain: rain,
    Snow: snow,
    Drizzle: drizzle,
  };

  return (
    <img
      src={`${types[type] || alert}`}
      alt={type}
      className="Forecast__img--hourBox"
    />
  );
};

export const nightIcons = ({ type }) => {
  const types = {
    Clear: clearNight,
    Clouds: cloudsNight,
  };
  return (
    <img src={`${types[type]}`} alt={type} className="Forecast__img--hourBox" />
  );
};
