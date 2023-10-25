import { forwardRef } from "react";
import TextStyle from "./text.style";

import PropTypes from "prop-types";

const Text = forwardRef((props, ref) => {
  const {
    children,
    as = "p",
    //
    size,
    typo,
    margin,
    padding,
    border,
    display,
    background,
    position,
    pc,
    tablet,
    longMobile,
    mobile,
  } = props;

  return (
    <TextStyle
      ref={ref}
      as={as}
      $size={size}
      $typography={typo}
      $margin={margin}
      $padding={padding}
      $border={border}
      $display={display}
      $background={background}
      $position={position}
      $pc={pc}
      $tablet={tablet}
      $longMobile={longMobile}
      $mobile={mobile}
    >
      {children}
    </TextStyle>
  );
});

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.oneOf([null, undefined]),
  ]),
  as: PropTypes.oneOf(["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"]),
  ...TextStyle.propTypes,
};

export default Text;
