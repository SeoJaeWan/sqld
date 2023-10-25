import { css } from "styled-components";
import PropTypes from "prop-types";

const position = ({ $position }) => {
  if ($position) {
    let {
      type,
      top,
      bottom,
      left,
      right,
      zIndex,
      isCenterX,
      isCenterY,
      isCenter,
    } = $position;

    if (isCenter) {
      isCenterX = true;
      isCenterY = true;
    }

    return css`
      ${type && `position: ${type}`};
      ${isCenterX &&
      `
        left: 50%;
        transform: translateX(-50%);
      `}
      ${isCenterY &&
      `
        top: 50%;
        transform: translateY(-50%);
      `}
      ${top && `top: ${top}`};
      ${bottom && `bottom: ${bottom}`};
      ${left && `left: ${left}`};
      ${right && `right: ${right}`};
      ${zIndex && `z-index: ${zIndex}`};
    `;
  } else {
    return css``;
  }
};

position.propTypes = {
  $position: PropTypes.shape({
    type: PropTypes.oneOf(["relative", "absolute", "fixed"]),
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    isCenterX: PropTypes.bool,
    isCenterY: PropTypes.bool,
    isCenter: PropTypes.bool,
  }),
};

export default position;
