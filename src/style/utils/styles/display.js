import { css } from "styled-components";
import PropTypes from "prop-types";

const display = ({ $display }) => {
  if ($display) {
    const {
      display,
      direction,
      wrap,
      justify,
      align,
      gridTemplateColumns,
      gap,
      float,
      tableLayout,
    } = $display;

    return css`
      ${display && `display: ${display}`};
      ${direction && `flex-direction: ${direction}`};
      ${wrap && `flex-wrap: ${wrap}`};
      ${justify && `justify-content: ${justify}`};
      ${align && `align-items: ${align}`};
      ${gap && `gap: ${gap}`};
      ${gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns}`};
      ${float && `float: ${float}`};
      ${tableLayout && `table-layout: ${tableLayout}`};
    `;
  } else {
    return css``;
  }
};

display.propTypes = {
  $display: PropTypes.shape({
    display: PropTypes.oneOf([
      "flex",
      "grid",
      "inline-flex",
      "block",
      "inline-block",
      "none",
    ]),
    direction: PropTypes.oneOf(["row", "column"]),
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    justify: PropTypes.oneOf([
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ]),
    align: PropTypes.oneOf([
      "stretch",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
    ]),
    float: PropTypes.oneOf(["left", "right"]),
    gridTemplateColumns: PropTypes.string,
    gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tableLayout: PropTypes.oneOf(["auto", "fixed"]),
  }),
};

export default display;
