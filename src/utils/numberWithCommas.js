const numberWithCommas = (num) => {
  if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "-";
  }
};

export default numberWithCommas;
