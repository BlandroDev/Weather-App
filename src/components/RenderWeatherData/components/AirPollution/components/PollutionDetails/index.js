const PollutionDetails = ({ name, micrograms }) => {
  return (
    <div className="AirPollution__advancedDetails--viewDetails gases">
      <p className="AirPollution__p--viewDetails">{name}</p>
      <p className="AirPollution__p--viewDetails strong">{`${micrograms} μg/m3`}</p>
    </div>
  );
};

export default PollutionDetails;
