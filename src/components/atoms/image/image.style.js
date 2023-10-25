import background from "style/utils/styles/background";
import Control from "style/utils/core/control";
import margin from "style/utils/styles/margin";
import other from "style/utils/styles/other";
import padding from "style/utils/styles/padding";
import size from "style/utils/styles/size";
import styled, { css, keyframes } from "styled-components";
import position from "style/utils/styles/position";
import border from "style/utils/styles/border";
import display from "style/utils/styles/display";

const fadeSlideIn = keyframes`
  from {
    transform: translateX(-21px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeSlideOut = keyframes`
  from {
    opacity: 1;
        transform: translateX(0);
  }
  to {
    opacity: 0;
     transform: translateX(21px);
  }
`;

const animation = {
  fadeSlideIn: css`
    animation: ${fadeSlideIn} ${(props) => props.$term}s ease-out forwards;
  `,

  fadeSlideOut: css`
    animation: ${fadeSlideOut} ${(props) => props.$term}s ease-out forwards;
  `,
};

const [propTypes, generateStyle] = Control([
  display,
  size,
  margin,
  padding,
  background,
  border,
  position,
  other,
]);

export const ImageStyle = styled.img`
  ${(props) => generateStyle(props)}
  ${(props) => props.$animation && animation[props.$animation]}
`;
ImageStyle.propTypes = propTypes;

export default ImageStyle;
