import { useRef } from "react";
import iconOpen from "assets/icons/arrowOpen/open.png";
import PollutionDetails from "./components/PollutionDetails";
import { airPollutanst } from "components/RenderWeatherData/components/AirPollution/adapters/airPollutants";
import { handlePollutionDetails } from "components/RenderWeatherData/functions/handlePollutionDetails";
import AirQualifier from "./components/AirQualifier";

const AirPollution = ({ components, airQuality, visible = "" }) => {
  const pollutionsDetailsRef = useRef();
  const btnRef = useRef();
  const iconRef = useRef();

  return (
    <div className={`AirPollution display--${visible}`}>
      <div className="AirPollution__airQualityBox">
        <h3 className="AirPollution__h3--airQualityBox">
          Calificación del Aire
        </h3>
        <AirQualifier qualification={airQuality} />
      </div>
      <div
        className="AirPollution__detailsPollutionBox"
        ref={pollutionsDetailsRef}
      >
        <div className="AirPollution__controlBox">
          <input
            type="button"
            value="Detalles Avanzados"
            className="AirPollution__input--controlBox"
            ref={btnRef}
            onClick={(e) =>
              handlePollutionDetails(
                e.target.value,
                btnRef,
                iconRef,
                pollutionsDetailsRef
              )
            }
          />
          <img
            src={iconOpen}
            className="AirPollution__img--controlBox"
            alt="iconOpen"
            ref={iconRef}
          />
        </div>
        <div className="AirPollution__advancedDetails">
          <h3 className="AirPollution__h3--advancedDetails">
            Contaminación del Aire
          </h3>
          {airPollutanst(components).map((components) => (
            <PollutionDetails
              name={components.name}
              micrograms={components.micrograms}
              key={components.key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirPollution;
