import Control from "style/utils/core/control";
import background from "style/utils/styles/background";
import margin from "style/utils/styles/margin";
import size from "style/utils/styles/size";
import styled from "styled-components";

const [propTypes, generateStyle] = Control([size, background, margin]);

const LineStyle = styled.div`
  display: inline-block;

  ${(props) => generateStyle(props)}
`;

LineStyle.propTypes = propTypes;

export default LineStyle;
