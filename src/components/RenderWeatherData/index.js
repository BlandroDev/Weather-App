import { useRef } from "react";
import NextHoursModal from "./components/NextHours";
import RenderMainPage from "./components/RenderMainPage";
import WeatherDetailsModal from "./components/WeatherDetails";

const RenderWeatherData = ({
  data,
  currentWeather,
  airData,
  forecast3Hours,
}) => {
  const contentDetailsRef = useRef();
  const modalRef = useRef();
  const contentForecastRef = useRef();
  const modalForecastRef = useRef();
  return (
    <>
      <RenderMainPage
        data={data}
        contentDetailsRef={contentDetailsRef}
        modalDetailsRef={modalRef}
        contentForecastRef={contentForecastRef}
        modalForecastRef={modalForecastRef}
      />

      <WeatherDetailsModal
        currentWeather={currentWeather}
        modalRef={modalRef}
        contentDetailsRef={contentDetailsRef}
        airData={airData}
      />

      <NextHoursModal
        modalRef={modalForecastRef}
        contentDetailsRef={contentForecastRef}
        forecast3Hours={forecast3Hours}
        timezone={currentWeather.timezone}
      />
    </>
  );
};

export default RenderWeatherData;
