import { sunrise, sunset } from "assets/icons/weather/icons";
import { format_00 } from "functions/format_00";

const TwilightType = ({ type, currentWeather }) => {
  const sunsetDate = new Date(
    (currentWeather.sys.sunset + currentWeather.timezone) * 1000
  );
  const sunriseDate = new Date(
    (currentWeather.sys.sunrise + currentWeather.timezone) * 1000
  );
  const sunriseTime = `${format_00(sunriseDate.getUTCHours())}:${format_00(
    sunriseDate.getUTCMinutes()
  )}`;
  const sunsetTime = `${format_00(sunsetDate.getUTCHours())}:${format_00(
    sunsetDate.getUTCMinutes()
  )}`;
  return (
    <div
      className={`box RenderDetails__${
        type === "sunrise" ? "sunrise" : "sunset"
      }`}
    >
      <p className="RenderDetails__p--TwilightType">{`${
        type === "sunrise" ? "Amanecer" : "Puesta del Sol"
      }`}</p>
      <img
        src={`${type === "sunrise" ? sunrise : sunset}`}
        alt="SunImg"
        className="imgSun RenderDetails__img--content"
      />
      <p className="RenderDetails__p--TwilightType strong">{`${
        type === "sunrise" ? sunriseTime : sunsetTime
      }hs.`}</p>
    </div>
  );
};
export default TwilightType;
