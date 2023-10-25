const checkRequired = (required, values) => {
  let isRequired = true;

  Object.entries(values).forEach(([key, value]) => {
    let checkData;
    if (value instanceof File) {
      checkData = value !== null;
    } else if (Array.isArray(value)) {
      checkData = value[0];
    } else if (typeof value === "string") {
      checkData = value.trim();
    }

    if (required[key] && !checkData) {
      isRequired = false;
    }
  });

  return isRequired;
};

export default checkRequired;
