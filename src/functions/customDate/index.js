export const customDate = (timezone, hour) => {
  const date = new Date(hour * 1000);
  const unixTimeStampDate = Math.floor(date.getTime() / 1000);
  const customDate = new Date((unixTimeStampDate + timezone) * 1000);
  const timeOffset = customDate.getTimezoneOffset();
  customDate.setMilliseconds(timeOffset * 60 * 1000);
  const currentDate = `${customDate.getDate()}/${customDate.getMonth() + 1}`;
  const currentHour = customDate.getHours();

  return {
    currentDate,
    currentHour,
  };
};
