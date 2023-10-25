import theme from "style/theme";
import Control from "style/utils/core/control";
import background from "style/utils/styles/background";
import border from "style/utils/styles/border";
import margin from "style/utils/styles/margin";
import other from "style/utils/styles/other";
import padding from "style/utils/styles/padding";
import size from "style/utils/styles/size";
import typography from "style/utils/styles/typography";
import styled from "styled-components";

const [propTypes, generateStyle] = Control([
  margin,
  padding,
  border,
  background,
  size,
  typography,
  other,
]);

export const InputStyle = styled.input`
  font-size: 14px;
  font-weight: 400;

  padding: 8px;

  outline: none;
  resize: none;

  @media (max-width: ${theme.responsive.longMobile}px) {
    font-size: 12px;
  }

  ${(props) => generateStyle(props)}
`;

export default InputStyle;

InputStyle.propTypes = propTypes;
