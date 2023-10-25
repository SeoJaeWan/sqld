import ButtonStyle from "./button.style";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    children,
    onClick,
    type,
    //
    display,
    margin,
    padding,
    border,
    position,
    background,
    size,
    typo,
    pc,
    tablet,
    longMobile,
    mobile,
    //
    hover,
    focus,
    active,
    visited,
    disabled,
    checked,
    selected,
  } = props;

  return (
    <ButtonStyle
      $display={display}
      $position={position}
      $margin={margin}
      $padding={padding}
      $border={border}
      $background={background}
      $size={size}
      $typography={typo}
      $pc={pc}
      $tablet={tablet}
      $longMobile={longMobile}
      $mobile={mobile}
      //
      $hover={hover}
      $focus={focus}
      $active={active}
      $visited={visited}
      $disabled={disabled}
      $checked={checked}
      $selected={selected}
      //
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.oneOf([null, undefined]),
  ]),
  onClick: PropTypes.func,
  type: PropTypes.string,
  ...ButtonStyle.propTypes,
};

export default Button;
