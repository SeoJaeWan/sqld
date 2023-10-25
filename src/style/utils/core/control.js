import { css } from "styled-components";
import createPseudo from "./pseudo";
import createResponsive from "./responsive";

const aggregatePropType = (styles) => {
  return styles.reduce((acc, style) => {
    return { ...acc, ...style.propTypes };
  }, {});
};

const generateStyleList = (styles) => (props) => {
  return styles.map((style) => style(props));
};

const Control = (styles) => {
  const propTypes = aggregatePropType(styles);
  const style = generateStyleList(styles);
  const responsiveStyle = createResponsive(style);
  const pseudoStyle = createPseudo(style);

  const generateStyle = (props) => css`
    ${style(props)}
    ${responsiveStyle(props)}
    ${pseudoStyle(props)}
  `;

  return [propTypes, generateStyle];
};

export default Control;
