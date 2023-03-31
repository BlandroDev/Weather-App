import ReactDOM from "react-dom";
import { closeModal } from "components/RenderWeatherData/functions/handleModal";
import closeIcon from "assets/icons/close/close.png";
import Forecast from "../Forecast";

const NextHours = ({
  modalRef,
  contentDetailsRef,
  forecast3Hours,
  timezone,
}) => {
  return (
    <div className="ModalBox" ref={modalRef}>
      <div className="ModalBox__card">
        <div className="ModalBox__cardContent" ref={contentDetailsRef}>
          <img
            className="ModalBox__img--cardContent"
            src={closeIcon}
            alt="closeIcon"
            onClick={() => closeModal(modalRef, contentDetailsRef)}
          />
          <div className="NextHours">
            <h1 className="NextHours__h1">Proximas horas</h1>
            <div className="NextHours__forecastBox">
              {forecast3Hours.list.map((list) => (
                <Forecast
                  key={list.dt}
                  hour={list.dt}
                  temp={list.main.temp}
                  description={list.weather[0].description}
                  type={list.weather[0].main}
                  pop={list.pop}
                  currentStyle="nextHoursStyle"
                  timezone={timezone}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function NextHoursModal({
  forecast3Hours,
  modalRef,
  contentDetailsRef,
  timezone,
}) {
  return ReactDOM.createPortal(
    <NextHours
      forecast3Hours={forecast3Hours}
      modalRef={modalRef}
      contentDetailsRef={contentDetailsRef}
      timezone={timezone}
    />,
    document.getElementById("modalDetails")
  );
}
