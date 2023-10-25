import styled, { css, keyframes } from "styled-components";
import Control from "style/utils/core/control";
import display from "style/utils/styles/display";
import margin from "style/utils/styles/margin";
import padding from "style/utils/styles/padding";
import border from "style/utils/styles/border";
import position from "style/utils/styles/position";
import background from "style/utils/styles/background";
import other from "style/utils/styles/other";
import size from "style/utils/styles/size";
import typography from "style/utils/styles/typography";
import transform from "style/utils/styles/transform";

const modalPopOpen = keyframes`
  0% {
    transform: scale(0.5);
  }

  40% {
    transform: scale(1.08);
  }

  80% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const animation = {
  modalPopOpen: css`
    animation: ${modalPopOpen} 0.3s ease-out;
  `,

  fadeIn: css`
    animation: ${fadeIn} 1s ease-out forwards;
  `,

  fadeOut: css`
    animation: ${fadeOut} 1s ease-out forwards;
  `,
};

const [propTypes, generateStyle] = Control([
  display,
  margin,
  padding,
  border,
  position,
  background,
  transform,
  other,
  size,
  typography,
]);

export const BoxStyle = styled.div`
  ${(props) => generateStyle(props)}

  ${(props) => props.$animation && animation[props.$animation]}
`;

BoxStyle.propTypes = propTypes;

export default BoxStyle;
