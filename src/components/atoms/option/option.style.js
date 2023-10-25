import styled from "styled-components";

const OptionStyle = styled.option`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "100%"};
  margin: ${(props) => props.$margin || "0 auto"};
  padding: ${(props) => props.$padding || "0"};
  border: ${(props) => props.$border || "none"};
`;

export default OptionStyle;
