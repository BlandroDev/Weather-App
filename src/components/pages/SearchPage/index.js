import useSearchCity from "customHooks/useSearchCity";
import { dataExtractor } from "adapters/dataExtractor";
import { textFormat } from "functions/textFormat";
import { urlReset } from "functions/urlReset";
import { key } from "helpers";
import Errors from "components/pages/ErrorPage";
import SearchInput from "components/SearchInput";
import Loader from "components/Loader";
import RenderWeatherData from "components/RenderWeatherData";
import {Helmet} from "react-helmet";
const SearchPage = ({ params }) => {
  const { weatherData } = useSearchCity(
    key,
    textFormat(urlReset(params.keywords))
  );
  return (
    <>
    <Helmet>
      <title>
      {`Búscar | ${decodeURI(urlReset(params.keywords))}`}
      </title>
    </Helmet>
      <div className="SearchPage">
        <SearchInput />
        {!weatherData && <Loader />}
        {!weatherData.error &&
          weatherData &&
          window.localStorage.setItem(
            "lastSearch",
            decodeURI(urlReset(params.keywords))
          )}
        {weatherData && !weatherData.error && (
          <RenderWeatherData
            data={dataExtractor({
              weatherData: weatherData,
              currentWeather: weatherData.currentWeather,
              airData: weatherData.airData,
              error: weatherData.error,
              home: false,
            })}
            currentWeather={weatherData.currentWeather}
            airData={weatherData.airData}
            forecast3Hours={weatherData.forecast3Hours}
          />
        )}
        {weatherData.error && <Errors error={weatherData.notFound} />}
      </div>
    </>
  );
};

export default SearchPage;
