import { forwardRef } from "react";
import BoxStyle from "./box.style";
import PropTypes from "prop-types";
import themeMerge from "style/utils/utils/themeMerge";
import styleMerge from "style/utils/utils/styleMerge";

const themeStyle = {};

const Box = forwardRef((props, ref) => {
  const {
    as = "div",
    children,
    className,
    //
    id,
    colSpan,
    //
    theme,
    //
    isCustomScroll,
    //
    onSubmit,
    onClick,
  } = props;

  const currentTheme = themeMerge(themeStyle, theme);

  const {
    display,
    margin,
    padding,
    border,
    position,
    background,
    transform,
    other,
    size,
    typo,
    hover,
    pc,
    tablet,
    longMobile,
    mobile,
    animation,
  } = styleMerge(props, currentTheme);

  return (
    <BoxStyle
      as={as}
      ref={ref}
      //
      className={className}
      id={id}
      colSpan={colSpan}
      //
      $display={display}
      $margin={margin}
      $padding={padding}
      $border={border}
      $position={position}
      $background={background}
      $other={other}
      $size={size}
      $transform={transform}
      $typography={typo}
      $hover={hover}
      $pc={pc}
      $tablet={tablet}
      $longMobile={longMobile}
      $mobile={mobile}
      $animation={animation}
      $isCustomScroll={isCustomScroll}
      //
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {children}
    </BoxStyle>
  );
});

Box.propTypes = {
  as: PropTypes.oneOf([
    "div",
    "form",
    "section",
    "article",
    "header",
    "footer",
    "label",
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.oneOf([null, undefined]),
  ]),
  //
  theme: PropTypes.oneOfType([
    PropTypes.oneOf(["basic", "full", "mainMargin"]),
    PropTypes.arrayOf(PropTypes.oneOf(["basic", "full", "mainMargin"])),
  ]),
  ...BoxStyle.propTypes,
};

export default Box;
