import Cities from "../Cities";
const RenderPopularsCities = ({ cities }) => {
  const citiesArray = cities.split(",");
  return (
    <>
      {citiesArray.map((response, index) => (
        <Cities city={response} key={index} />
      ))}
    </>
  );
};

export default RenderPopularsCities;
