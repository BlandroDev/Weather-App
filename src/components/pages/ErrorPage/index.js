import errorIcon from "assets/icons/error/error-404.png";
import {Helmet} from "react-helmet";
const ErrorPage = ({ error }) => {
  return (
    <div className="ErrorPage">
      <Helmet>
        <title>
        {`Error | ${error}`}
        </title>
        </Helmet>
      <main className="ErrorPage__main">
        <img src={errorIcon} className="ErrorPage__img--main" alt="errorIcon" />
        <h4 className="ErrorPage__h4--main">{error}</h4>
      </main>
    </div>
  );
};

export default ErrorPage;
