import { good, poor, veryPoor, moderate } from "assets/icons/airPollution";

const AirQualifier = ({ qualification }) => {
  const types = {
    1: {
      src: good,
      description: "Buena",
    },
    2: {
      src: good,
      description: "Justa",
    },
    3: {
      src: moderate,
      description: "Moderado",
    },
    4: {
      src: poor,
      description: "Mala",
    },
    5: {
      src: veryPoor,
      description: "Muy Mala",
    },
  };

  return (
    <>
      <img
        src={`${types[qualification].src}`}
        alt="imgAirQuality"
        className="AirPollution__img--airQualityBox"
      ></img>
      <h3 className="AirPollution__h3--airQualityBox">{`${types[qualification].description}`}</h3>
    </>
  );
};

export default AirQualifier;
