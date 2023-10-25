import { css } from "styled-components";
import PropTypes from "prop-types";

const transform = ({ $transform }) => {
  if ($transform) {
    const {
      rotate,
      scale,
      skewX,
      skewY,
      origin,
      transition,
      translateX,
      translateY,
    } = $transform;

    const isTransform =
      rotate || scale || skewX || skewY || translateX || translateY;

    return css`
      ${isTransform &&
      `transform: rotate(${rotate ?? 0}deg) scale(${scale ?? 1})
        skewX(${skewX ?? 0}deg) skewY(${skewY ?? 0}deg)
        ${translateX ? ` translateX(${translateX})` : ""} 
        ${translateY ? ` translateY(${translateY})` : ""} 
        `};

      ${origin && `transform-origin: ${origin};`}
      ${transition && `transition: ${transition};`}
    `;
  } else {
    return css``;
  }
};

transform.propTypes = {
  $transform: PropTypes.shape({
    rotate: PropTypes.number,
    scale: PropTypes.number,
    skewX: PropTypes.number,
    skewY: PropTypes.number,
  }),
};

export default transform;
