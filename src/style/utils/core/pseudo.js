import { css } from "styled-components";
import convertStyles from "../utils/convertStyles";

const pseudoSelectors = {
  $before: "::before",
  $after: "::after",
  $hover: "&:hover",
  $focus: "&:focus",
  $active: "&:active",
  $visited: "&:visited",
  $disabled: "&:disabled",
  $checked: "&:checked",
  $selected: "&:selected",
};

const createPseudo = (style) => (props) => {
  const styleList = Object.entries(pseudoSelectors)
    .map(([key, value]) => {
      if (props[key]) {
        return css`
          ${value} {
            ${style(convertStyles(props[key]))}
          }
        `;
      }
      return null;
    })
    .filter(Boolean); // 필터링하여 null 항목 제거

  return styleList;
};

export default createPseudo;
