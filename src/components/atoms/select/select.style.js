import Control from "style/utils/core/control";
import background from "style/utils/styles/background";
import border from "style/utils/styles/border";
import margin from "style/utils/styles/margin";
import padding from "style/utils/styles/padding";
import size from "style/utils/styles/size";
import typography from "style/utils/styles/typography";
import styled from "styled-components";

const [propTypes, generateStyle] = Control([
  size,
  margin,
  padding,
  border,
  background,
  typography,
]);

const SelectStyle = styled.select`
  outline: none;

  ${(props) => generateStyle(props)}

  cursor: pointer;

  background: url(/asset/img/ic-arrow-bottom.png) no-repeat center right 8px;
  background-size: 8px 8px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

SelectStyle.propTypes = propTypes;

export default SelectStyle;
