import styled from "styled-components";
import { Link } from "react-router-dom";
import Control from "style/utils/core/control";
import display from "style/utils/styles/display";
import background from "style/utils/styles/background";
import border from "style/utils/styles/border";
import size from "style/utils/styles/size";
import margin from "style/utils/styles/margin";
import padding from "style/utils/styles/padding";
import typography from "style/utils/styles/typography";

const [props, style] = Control([
  display,
  background,
  border,
  size,
  margin,
  padding,
  typography,
]);

const LinkStyle = styled(Link)`
  ${(props) => style(props)}
`;

LinkStyle.propTypes = props;

export default LinkStyle;
