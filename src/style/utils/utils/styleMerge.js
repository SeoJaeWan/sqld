const styleMerge = (style, theme) => {
  const updateStyle = { ...style };
  if (theme) {
    Object.entries(theme).forEach(([key, value]) => {
      const currentStyle = updateStyle[key] ?? {};
      updateStyle[key] = {
        ...value,
        ...currentStyle,
      };
    });
  }

  return updateStyle;
};

export default styleMerge;
