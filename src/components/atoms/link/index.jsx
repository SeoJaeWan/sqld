import PropTypes from "prop-types";
import LinkStyle from "./link.style";

const Link = (props) => {
  const {
    display,
    background,
    border,
    size,
    margin,
    padding,
    typo,
    pc,
    tablet,
    mobile,
    longMobile,
    //
    children,
    //
    link,
    target,
    preventScrollReset,
  } = props;

  return (
    <LinkStyle
      $display={display}
      $background={background}
      $border={border}
      $size={size}
      $margin={margin}
      $padding={padding}
      $typography={typo}
      $pc={pc}
      $tablet={tablet}
      $mobile={mobile}
      $longMobile={longMobile}
      //
      to={link}
      target={target}
      preventScrollReset={preventScrollReset}
    >
      {children}
    </LinkStyle>
  );
};

Link.propTypes = {
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
  //
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.oneOf([null, undefined]),
  ]),
  //
  ...LinkStyle.propTypes,
};

export default Link;
