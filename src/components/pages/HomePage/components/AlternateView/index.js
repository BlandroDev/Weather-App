import { Link } from "wouter";
import RenderPopularsCities from "./components/RendersPopularsCities";
const AlternateView = () => {
  const cities = "London,Buenos Aires,New York,Madrid,Alaska,Tokyo";
  const recentSearch = window.localStorage.getItem("lastSearch");
  return (
    <div className="AlternateView">
      {recentSearch !== null ? (
        <div className="AlternateView__recentSearch">
          <h4 className="AlternateView__h4--recentSearch">Ultimo Visto</h4>
          <Link to={`/search/${recentSearch}`}>
            <button className="AlternateView__button--recentSearch">
              {recentSearch}
            </button>
          </Link>
        </div>
      ) : null}
      <div className="AlternateView__citiesContainer">
        <h3 className="AlternateView__h3--citiesContainer">
          Ciudades Populares
        </h3>
        <RenderPopularsCities cities={cities} />
      </div>
    </div>
  );
};

export default AlternateView;
