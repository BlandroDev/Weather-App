import CurrentTime from "components/CurrentTime";
import { openModal } from "components/RenderWeatherData/functions/handleModal";

const WeatherInformation = ({
  city,
  country,
  weather,
  max,
  min,
  timezone,
  modalDetailsRef,
  contentDetailsRef,
  temp,
}) => {
  return (
    <>
      <h2 className="RenderMainPage__h2">{`${city} - ${country}`}</h2>
      <h1 className="RenderMainPage__h1">{`${Math.round(temp)}°C`}</h1>
      <p className="RenderMainPage__p">{`${weather} ${Math.round(
        max
      )}°/${Math.round(min)}°`}</p>
      <div className="RenderMainPage__moreDetails">
        <CurrentTime timezone={timezone} />
        <p
          className="RenderMainPage__p--moreDetails"
          onClick={() => openModal(modalDetailsRef, contentDetailsRef)}
        >
          Más Detalles
        </p>
      </div>
    </>
  );
};

export default WeatherInformation;
