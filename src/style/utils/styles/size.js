import { css } from "styled-components";
import PropTypes from "prop-types";

const size = ({ $size }) => {
  if ($size) {
    const {
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      aspectRatio,
    } = $size;

    return css`
      ${width && `width: ${width}`};
      ${height && `height: ${height}`};

      ${minWidth && `min-width: ${minWidth}`};
      ${minHeight && `min-height: ${minHeight}`};

      ${maxWidth && `max-width: ${maxWidth}`};
      ${maxHeight && `max-height: ${maxHeight}`};

      ${aspectRatio && `aspect-ratio: ${aspectRatio}`};
    `;
  } else {
    return css``;
  }
};

size.propTypes = {
  $size: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    aspectRatio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

export default size;
