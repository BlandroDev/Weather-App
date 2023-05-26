import {
  clear,
  clouds,
  clearNight,
  rainNight,
  snowNight,
  rain,
  snow,
  clearAfternoon,
  smokeDay,
  smokeNight,
} from "assets/fondos/backgrounds";
import { currentTime } from "functions/CurrentHour";

const changeBackground = (cases, timezone) => {
  const { currentDate } = currentTime(timezone);
  const hour = currentDate.getHours();
  const day = {
    Clear: clear,
    Clouds: clouds,
  };

  const globalDay = {
    Snow: snow,
    Rain: rain,
    Thunderstorm: rain,
    Drizzle: rain,
  };

  const night = {
    Clear: clearNight,
    Clouds: clearNight,
    Rain: rainNight,
    Thunderstorm: rainNight,
    Drizzle: rainNight,
    Snow: snowNight,
  };

  if (hour >= 6 && hour <= 17 && (cases !== "Clear") & (cases !== "Clouds")) {
    return globalDay[cases] || smokeDay;
  } else if (hour >= 6 && hour <= 15) {
    return day[cases];
  } else if (hour >= 16 && hour <= 17) {
    return clearAfternoon;
  } else {
    return night[cases] || smokeNight;
  }
};

export default changeBackground;
