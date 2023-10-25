const convertStyles = (styles) => {
  return Object.entries(styles).reduce((acc, [key, value]) => {
    const property = key === "typo" ? "typography" : key;
    return { ...acc, [`$${property}`]: value };
  }, {});
};

export default convertStyles;
