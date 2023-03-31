import { format_00 } from "../format_00";

export const currentTime = (timezone) => {
  const localDate = new Date();
  const unixTimeStamp = Math.floor(localDate.getTime() / 1000);
  const currentDate = new Date((unixTimeStamp + timezone) * 1000);
  const timeOffset = currentDate.getTimezoneOffset();
  currentDate.setMilliseconds(timeOffset * 60 * 1000);

  const currentHour = () => {
    return {
      hour: format_00(currentDate.getHours()),
      min: format_00(currentDate.getMinutes()),
      sec: format_00(currentDate.getSeconds()),
      currentMonth: `${
        format_00(localDate.getDate()) !== format_00(currentDate.getDate())
          ? `${format_00(currentDate.getDate())}/${format_00(
              currentDate.getMonth() + 1
            )}`
          : ""
      }`,
    };
  };

  return {
    currentDate,
    currentHour,
  };
};
