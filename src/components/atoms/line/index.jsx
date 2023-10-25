import PropTypes from "prop-types";
import LineStyle from "./line.style";

const theme = {
  row: (size) => {
    return {
      width: size,
      height: "1px",
    };
  },
  col: (size) => {
    return {
      width: "1px",
      height: size,
    };
  },
};

const Line = (props) => {
  const {
    direction,
    size,
    margin,
    background,
    pc,
    tablet,
    longMobile,
    mobile,
  } = props;

  const currentTheme = theme[direction](size);

  return (
    <LineStyle
      $size={currentTheme}
      $margin={margin}
      $background={background}
      $pc={pc}
      $tablet={tablet}
      $longMobile={longMobile}
      $mobile={mobile}
    />
  );
};

Line.propTypes = {
  direction: PropTypes.oneOf(["row", "col"]).isRequired,
  ...LineStyle.propTypes,
  size: PropTypes.string.isRequired,
};

export default Line;
