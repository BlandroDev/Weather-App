export const handlePollutionDetails = (
  value,
  btnRef,
  iconRef,
  pollutionsDetailsRef
) => {
  if (value === "Detalles Avanzados") {
    setTimeout(() => (btnRef.current.value = "Ocultar Detalles"), 1000);
    iconRef.current.classList.add("transform__icon");
    pollutionsDetailsRef.current.classList.add(
      "transform__detailsPollutionBox"
    );
  } else {
    setTimeout(() => (btnRef.current.value = "Detalles Avanzados"), 1000);
    iconRef.current.classList.remove("transform__icon");
    pollutionsDetailsRef.current.classList.remove(
      "transform__detailsPollutionBox"
    );
  }
};
