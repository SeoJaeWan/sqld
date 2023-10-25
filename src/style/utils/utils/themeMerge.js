const themeMerge = (themeStyle, theme) => {
  if (typeof theme === "string") {
    return themeStyle[theme];
  } else if (Array.isArray(theme)) {
    return theme.reduce((acc, cur) => {
      const updateTheme = themeStyle[cur];

      Object.entries(updateTheme).forEach(([key, value]) => {
        if (acc[key] === undefined) {
          acc[key] = { ...value };
        } else {
          acc[key] = { ...acc[key], ...value };
        }
      });

      return {
        ...acc,
      };
    }, {});
  }
};

export default themeMerge;
