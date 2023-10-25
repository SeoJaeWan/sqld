import PropTypes from "prop-types";

import SectionStyle from "./select.style";

const Select = (props) => {
  const {
    children,
    //
    size,
    margin,
    padding,
    border,
    background,
    typo,
    pc,
    tablet,
    longMobile,
    mobile,
    //
    value,
    onChange,
  } = props;
  return (
    <SectionStyle
      $size={size}
      $margin={margin}
      $padding={padding}
      $border={border}
      $background={background}
      $typography={typo}
      $pc={pc}
      $tablet={tablet}
      $longMobile={longMobile}
      $mobile={mobile}
      //
      value={value}
      onChange={onChange}
    >
      {children}
    </SectionStyle>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,

  ...SectionStyle.propTypes,
};

export default Select;
