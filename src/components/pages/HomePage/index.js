import Loader from "components/Loader";
import { dataExtractor } from "adapters/dataExtractor";
import { changeBgBodyPage } from "functions/changeBgBodyPage";
import SearchInput from "components/SearchInput";
import RenderWeatherData from "components/RenderWeatherData";
import useGetPosition from "customHooks/useGetPosition";
import { useGetWeatherDataContext } from "customHooks/useGetWeatherDataContext";
import AlternateView from "./components/AlternateView";
import { Helmet } from "react-helmet";
import ErrorPage from "../ErrorPage";
const HomePage = () => {
  const { position } = useGetPosition();
  const { weatherData } = useGetWeatherDataContext({ position });
  const url = window.localStorage.getItem("url");
  changeBgBodyPage(url);
  return (
    <>
      <Helmet>
        <title>Weather App</title>
      </Helmet>
      <div className="HomePage">
        <SearchInput />
        {!weatherData && <Loader />}

        {weatherData && weatherData !== "unaccepted" && !weatherData.error && (
          <RenderWeatherData
            data={dataExtractor({
              weatherData: weatherData,
              currentWeather: weatherData.currentWeather,
              airData: weatherData.airData,
              error: weatherData.error,
            })}
            currentWeather={weatherData.currentWeather}
            airData={weatherData.airData}
            forecast3Hours={weatherData.forecast3Hours}
          />
        )}

        {weatherData === "unaccepted" && <AlternateView />}
        {weatherData.error && <ErrorPage error={weatherData.error} />}
      </div>
    </>
  );
};

export default HomePage;
