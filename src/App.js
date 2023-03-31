import PublicRoutes from "components/routes/PublicRoutes";
import { WeatherContextProvider } from "./Context/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <PublicRoutes />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
