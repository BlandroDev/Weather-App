export const timeFormat = (hour) => {
  if (hour.toString().length > 1) return `${hour}:00`;
  else return `0${hour}:00`;
};
