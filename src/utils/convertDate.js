import dayjs from "dayjs";

const convertDate = (date) => {
  const convert = dayjs(date).format("YYYY.MM.DD");
  return convert;
};

export default convertDate;
