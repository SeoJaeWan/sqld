import { css } from "styled-components";
import theme from "style/theme";
import convertStyles from "../utils/convertStyles";
import createPseudo from "./pseudo";

const applyStyles = (mediaSize, style, props) => css`
  @media (max-width: ${mediaSize}px) {
    ${style(convertStyles(props))}
    ${createPseudo(style)(convertStyles(props))}
  }
`;

const createResponsive =
  (style) =>
  ({ $mobile, $longMobile, $tablet, $pc }) => {
    const styleList = [];

    if ($pc) {
      styleList.push(applyStyles(theme.responsive.pc, style, $pc));
    }

    if ($tablet) {
      styleList.push(applyStyles(theme.responsive.tablet, style, $tablet));
    }

    if ($longMobile) {
      styleList.push(
        applyStyles(theme.responsive.longMobile, style, $longMobile)
      );
    }

    if ($mobile) {
      styleList.push(applyStyles(theme.responsive.mobile, style, $mobile));
    }

    return styleList;
  };

export default createResponsive;
