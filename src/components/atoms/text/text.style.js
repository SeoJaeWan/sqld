import Control from "style/utils/core/control";
import background from "style/utils/styles/background";
import border from "style/utils/styles/border";
import display from "style/utils/styles/display";
import margin from "style/utils/styles/margin";
import padding from "style/utils/styles/padding";
import position from "style/utils/styles/position";
import size from "style/utils/styles/size";
import typography from "style/utils/styles/typography";
import styled from "styled-components";

const [propTypes, generateStyle] = Control([
  typography,
  margin,
  padding,
  border,
  display,
  background,
  position,
  size,
]);

export const TextStyle = styled.p`
  ${(props) => generateStyle(props)}
`;

TextStyle.propTypes = propTypes;

export default TextStyle;
