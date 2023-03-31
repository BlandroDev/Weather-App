import {
  dayIcons,
  globalIcons,
  nightIcons,
} from "../../adapters/weatherIconsMap";

const WeatherIcon = ({ type, hour }) => {
  if (type !== "Clear" && type !== "Clouds") {
    return globalIcons({ type });
  } else if (hour > 5 && hour <= 18) return dayIcons({ type });
  else return nightIcons({ type });
};

export default WeatherIcon;
