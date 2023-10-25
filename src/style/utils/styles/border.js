import { css } from "styled-components";
import PropTypes from "prop-types";

const border = ({ $border }) => {
  if ($border) {
    let { all, color, style, radius, top, bottom, left, right } = $border;

    return css`
      border-top: ${top ?? all ?? 0};
      border-bottom: ${bottom ?? all ?? 0};
      border-left: ${left ?? all ?? 0};
      border-right: ${right ?? all ?? 0};

      border-color: ${(props) => props.theme.colors[color] ?? color ?? "black"};
      border-style: ${style ?? "solid"};
      border-radius: ${radius ?? 0};
    `;
  } else {
    return css``;
  }
};

border.propTypes = {
  $border: PropTypes.shape({
    all: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.oneOf(["solid", "dotted", "dashed"]),
    radius: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
  }),
};

export default border;
