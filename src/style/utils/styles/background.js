import { css } from "styled-components";
import PropTypes from "prop-types";

const background = ({ $background }) => {
  if ($background) {
    const { image, color, position, size, repeat } = $background;

    return css`
      ${image && `background-image: url(${image});`}
      ${color && `background-color: ${color};`}
      ${position && `background-position: ${position};`}
      ${size && `background-size: ${size};`}
      ${repeat && `background-repeat: ${repeat};`}
    `;
  } else {
    return css``;
  }
};

background.propTypes = {
  $background: PropTypes.shape({
    image: PropTypes.string,
    color: PropTypes.string,
    position: PropTypes.oneOf([
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top left",
      "top right",
      "bottom left",
      "bottom right",
    ]),
    size: PropTypes.oneOf(["cover", "contain"]),
    repeat: PropTypes.oneOf(["no-repeat", "repeat", "repeat-x", "repeat-y"]),
  }),
};

export default background;
