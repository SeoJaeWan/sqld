import Control from "style/utils/core/control";
import display from "style/utils/styles/display";
import styled from "styled-components";

const [propTypes, generateStyle] = Control([display]);

const LineBreakStyle = styled.br`
  ${(props) => generateStyle(props)}
`;

LineBreakStyle.propTypes = propTypes;

export default LineBreakStyle;
