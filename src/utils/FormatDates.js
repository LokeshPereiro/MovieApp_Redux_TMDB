import dayjs from "dayjs";

export const FormatDates = (date) => {
  return dayjs(date).format("MMM D, YYYY");
};
