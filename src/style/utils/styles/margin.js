import { css } from "styled-components";
import PropTypes from "prop-types";

const margin = ({ $margin }) => {
  if ($margin) {
    let { all, top, bottom, left, right } = $margin;

    if (all) {
      const split = all.split(" ");
      if (split.length === 1) {
        top = bottom = left = right = split[0];
      }

      if (split.length === 2) {
        top = bottom = split[0];
        left = right = split[1];
      }

      if (split.length === 3) {
        top = split[0];
        left = right = split[1];
        bottom = split[2];
      }

      if (split.length === 4) {
        top = split[0];
        right = split[1];
        bottom = split[2];
        left = split[3];
      }
    }

    return css`
      margin-top: ${top ?? 0};
      margin-bottom: ${bottom ?? 0};
      margin-left: ${left ?? 0};
      margin-right: ${right ?? 0};
    `;
  } else {
    return css``;
  }
};

margin.propTypes = {
  $margin: PropTypes.shape({
    all: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
  }),
};

export default margin;
