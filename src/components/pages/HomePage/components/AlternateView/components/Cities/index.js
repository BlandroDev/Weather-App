import { climaIcon } from "assets/icons/weather/icons";
import { Link } from "wouter";
const Cities = ({ city }) => {
  return (
    <Link to={`/search/${city}`}>
      <div className="CitieBox">
        <h3 className="CitieBox__h3">{city}</h3>
        <img src={climaIcon} alt="clima" className="CitieBox__img"></img>
        <h3 className="CitieBox__h3">Ver Clima</h3>
      </div>
    </Link>
  );
};

export default Cities;
