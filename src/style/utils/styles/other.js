import { css } from "styled-components";
import PropTypes from "prop-types";

const other = ({ $other }) => {
  if ($other) {
    const {
      overflowX,
      overflowY,
      opacity,
      objectFit,
      cursor,
      visibility,
      outline,
      boxShadow,
    } = $other;

    return css`
      overflow-x: ${overflowX ?? "visible"};
      overflow-y: ${overflowY ?? "visible"};
      opacity: ${opacity ?? 1};
      object-fit: ${objectFit};
      cursor: ${cursor};
      visibility: ${visibility ?? "visible"};
      outline: ${outline ?? "none"};
      box-shadow: ${boxShadow};
    `;
  } else {
    return css``;
  }
};

other.propTypes = {
  $other: PropTypes.shape({
    "overflow-x": PropTypes.oneOf(["visible", "hidden", "scroll"]),
    "overflow-y": PropTypes.oneOf(["visible", "hidden", "scroll"]),
    opacity: PropTypes.number,
    objectFit: PropTypes.oneOf([
      "fill",
      "contain",
      "cover",
      "none",
      "scale-down",
    ]),
    cursor: PropTypes.oneOf([
      "auto",
      "default",
      "none",
      "context-menu",
      "help",
      "pointer",
    ]),
    visibility: PropTypes.oneOf(["visible", "hidden"]),
    outline: PropTypes.oneOf(["none"]),
    boxShadow: PropTypes.string,
  }),
};

export default other;
