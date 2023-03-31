import { popRain } from "assets/icons/weather/icons";
import WeatherIcon from "./components/WeatherIcon";
import { timeFormat } from "functions/timeFormat";
import { customDate } from "functions/customDate";
const Forecast = ({
  hour,
  temp,
  description,
  type,
  pop,
  currentStyle = "",
  timezone,
}) => {
  const { currentDate, currentHour } = customDate(timezone, hour);

  return (
    <div className={` Forecast ${currentStyle}`}>
      <div className=" Forecast__hourBox">
        <WeatherIcon type={type} hour={currentHour} />
        <p className=" Forecast__p--hourBox">{`${
          currentHour === 0 ? currentDate : `${timeFormat(currentHour)}hs.`
        } ${description}`}</p>
      </div>

      <div className=" Forecast__popBox">
        <img src={popRain} alt="ImgPop" className="Forecast__img--popBox" />
        <p className=" Forecast__p--popBox"> {`${Math.round(100 * pop)}%`}</p>
      </div>

      <div className=" Forecast__TemperatureBox">
        <p className=" Forecast__p--TemperatureBox">{`${Math.round(
          temp
        )}°C`}</p>
      </div>
    </div>
  );
};

export default Forecast;
