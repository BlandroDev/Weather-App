import ReactDOM from "react-dom";
import RenderDetails from "./components/RenderDetails";
import closeIcon from "assets/icons/close/close.png";
import { closeModal } from "components/RenderWeatherData/functions/handleModal";
const WeatherDetails = ({
  currentWeather,
  modalRef,
  contentDetailsRef,
  airData,
}) => {
  return (
    <div className="ModalBox" ref={modalRef}>
      <div className="ModalBox__card">
        <div className="ModalBox__cardContent" ref={contentDetailsRef}>
          <img
            src={closeIcon}
            className="ModalBox__img--cardContent"
            alt="closeIcon"
            onClick={() => closeModal(modalRef, contentDetailsRef)}
          />
          {currentWeather && (
            <RenderDetails
              currentWeather={currentWeather}
              airData={airData.list[0]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default function WeatherDetailsModal({
  currentWeather,
  modalRef,
  contentDetailsRef,
  airData,
}) {
  return ReactDOM.createPortal(
    <WeatherDetails
      currentWeather={currentWeather}
      modalRef={modalRef}
      contentDetailsRef={contentDetailsRef}
      airData={airData}
    />,
    document.getElementById("modalDetails")
  );
}
