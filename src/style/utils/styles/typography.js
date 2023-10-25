import { css } from "styled-components";
import PropTypes from "prop-types";

// need more https://reactnative.dev/docs/text-style-props
const typography = ({ $typography }) => {
  if ($typography) {
    const {
      fontFamily,
      color,
      size,
      weight,
      lineHeight,
      transform,
      wordBreak,
      space,
      align,
      lineClamp,
      whiteSpace,
      textOverFlow,
      textDecoration,
      textStroke,
    } = $typography;

    return css`
      ${fontFamily && `font-family: ${fontFamily};`}
      ${(props) => color && `color: ${props.theme.colors[color] ?? color};`}
      ${(props) => size && `font-size: ${props.theme.sizes[size] ?? size};`}
      ${weight && `font-weight: ${weight};`}
      ${transform && `text-transform: ${transform};`}
      ${lineHeight && `line-height: ${lineHeight};`}
      ${space && `letter-spacing: ${space};`}
      ${align && `text-align: ${align};`}
      ${wordBreak && `word-break: ${wordBreak};`}
      ${whiteSpace && `white-space: ${whiteSpace};`}
      ${textOverFlow && `text-overflow: ${textOverFlow};`}
      ${textDecoration && `text-decoration: ${textDecoration};`}
      ${textStroke &&
      css`
        -webkit-text-stroke: ${textStroke};
        text-stroke: ${textStroke};
      `};
      ${lineClamp &&
      css`
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${lineClamp};
        display: -moz-box;
        -moz-box-orient: vertical;
        -moz-line-clamp: ${lineClamp};
        display: -ms-box;
        -ms-box-orient: vertical;
        -ms-line-clamp: ${lineClamp};
      `}
    `;
  } else {
    return css``;
  }
};

typography.propTypes = {
  $typography: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string,
    lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    transform: PropTypes.oneOf([
      "none",
      "capitalize",
      "uppercase",
      "lowercase",
    ]),
    wordBreak: PropTypes.oneOf([
      "normal",
      "break-all",
      "keep-all",
      "break-word",
    ]),
    space: PropTypes.string,
    align: PropTypes.oneOf(["left", "center", "right"]),
    whiteSpace: PropTypes.oneOf([
      "normal",
      "nowrap",
      "pre",
      "pre-wrap",
      "pre-line",
    ]),
    textOverFlow: PropTypes.oneOf(["clip", "ellipsis"]),
    lineClamp: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    textDecoration: PropTypes.string,
  }),
};

export default typography;
