import { Switch, Route } from "wouter";
import SearchPage from "components/pages/SearchPage";
import ErrorPage from "components/pages/ErrorPage";
import changeBgPage from "functions/changeBgPage";
import { clear } from "assets/images/images";
import HomePage from "components/pages/HomePage";
const PublicRoutes = () => {
  const url = window.localStorage.getItem("url") || clear;
  changeBgPage(url);
  return (
    <div className="PublicRoutes">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/search/:keywords" component={SearchPage} />
        <Route>
          <ErrorPage error="Error: 404 Página No Encontrada" />
        </Route>
      </Switch>
    </div>
  );
};

export default PublicRoutes;
