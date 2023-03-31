import { useEffect } from "react";
import bgPageOptions from "functions/bgPageOptions";
import changeBgPage from "functions/changeBgPage";
import { BackgroundImg } from "StyledComponents";
import changeBackground from "components/RenderWeatherData/functions/changeBackground";
import { openModal } from "components/RenderWeatherData/functions/handleModal";
import LocationIcon from "./components/LocationIcon";
import HomeIcon from "./components/HomeIcon";
import Forecast from "../Forecast";
import AirPollution from "../AirPollution";
import WeatherInformation from "./components/WeatherInformation";

const RenderMainPage = ({
  data,
  contentDetailsRef,
  modalDetailsRef,
  contentForecastRef,
  modalForecastRef,
}) => {
  const {
    city,
    temp,
    max,
    min,
    weather,
    list,
    weatherData,
    main,
    timezone,
    airData,
    home,
    error,
    country,
  } = data;

  const url = bgPageOptions(main, timezone);
  window.localStorage.setItem("url", url);

  useEffect(() => {
    setTimeout(() => changeBgPage(url), 300);
  }, [url]);

  return (
    <div className="RenderMainPage">
      <BackgroundImg img={() => changeBackground(main, timezone)}>
        {weatherData && home && weatherData !== "unaccepted" ? (
          <LocationIcon />
        ) : null}
        {!error && !home && <HomeIcon />}
        {error && !home && <HomeIcon />}
        <WeatherInformation
          city={city}
          country={country}
          weather={weather}
          max={max}
          min={min}
          timezone={timezone}
          modalDetailsRef={modalDetailsRef}
          contentDetailsRef={contentDetailsRef}
          temp={temp}
        />
      </BackgroundImg>

      <div className="RenderMainPage__boxForecast">
        <div className="RenderMainPage__content--boxForecast">
          {list.map((list, index) => {
            if (index <= 3) {
              return (
                <Forecast
                  key={list.dt}
                  hour={list.dt}
                  description={list.weather[0].description}
                  type={list.weather[0].main}
                  pop={list.pop}
                  index={index}
                  timezone={timezone}
                  temp={list.main.temp}
                />
              );
            } else {
              return null;
            }
          })}
          <button
            className="RenderMainPage__button--boxForecast"
            onClick={() => openModal(modalForecastRef, contentForecastRef)}
          >
            Próximas horas
          </button>
        </div>
      </div>

      <AirPollution
        components={airData.components}
        airQuality={airData.main.aqi}
      />
    </div>
  );
};

export default RenderMainPage;
