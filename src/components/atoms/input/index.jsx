import InputStyle from "./input.style";
import PropsType from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    as,
    type,
    hidden,
    readOnly,
    accept,
    //
    size,
    margin,
    padding,
    border,
    background,
    typo,
    other,
    longMobile,
    pc,
    tablet,
    mobile,
    //
    placeholder,
    name,
    value,
    onChange,
    onKeyPress,
  } = props;

  return (
    <InputStyle
      ref={ref}
      //
      as={as}
      type={type}
      hidden={hidden}
      readOnly={readOnly}
      accept={accept}
      //
      $size={size}
      $margin={margin}
      $padding={padding}
      $border={border}
      $background={background}
      $typography={typo}
      $other={other}
      $pc={pc}
      $tablet={tablet}
      $longMobile={longMobile}
      $mobile={mobile}
      //
      name={name}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
});

export default Input;

Input.propTypes = {
  as: PropsType.oneOf(["input", "textarea"]),
  type: PropsType.oneOf(["text", "password", "file", "number", "email", "tel"]),
  hidden: PropsType.bool,
  readOnly: PropsType.bool,

  $width: PropsType.string,
  $height: PropsType.string,

  $margin: PropsType.string,
  $padding: PropsType.string,

  $border: PropsType.string,
  $borderRadius: PropsType.string,

  $fontSize: PropsType.string,
  $fontWeight: PropsType.string,

  $color: PropsType.string,
  $backgroundColor: PropsType.string,

  $placeholder: PropsType.string,

  autoComplete: PropsType.string,
  value: PropsType.string,
  onChange: PropsType.func,
};
