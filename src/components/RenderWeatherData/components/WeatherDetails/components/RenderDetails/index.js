import AirPollution from "../../../AirPollution";
import { getDataFormat } from "./adapters/getDataFormat";
import TwilightType from "./components/TwilightType";
import RenderDetailsData from "./components/RenderDetailsData";

const RenderDetails = ({ currentWeather, airData }) => {
  return (
    <div className="box-parent RenderDetails">
      <div className="box-details RenderDetails__content">
        <h1 className="title RenderDetails__h1--content">Detalles</h1>
        <TwilightType type="sunrise" currentWeather={currentWeather} />
        <div className="box details RenderDetails__details--content">
          {getDataFormat(currentWeather).map((res) => (
            <RenderDetailsData
              key={res.key}
              value={res.value}
              name={res.name}
            />
          ))}
        </div>
        <TwilightType type="sunset" currentWeather={currentWeather} />
        <div className="airDiv RenderDetails__airPollutionBox">
          <AirPollution
            components={airData.components}
            airQuality={airData.main.aqi}
            visible="visible"
          />
        </div>
      </div>
    </div>
  );
};

export default RenderDetails;
