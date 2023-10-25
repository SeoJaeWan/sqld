import ImageStyle from "./image.style";
import propTypes from "prop-types";

const Image = (props) => {
  const {
    size,
    display,
    margin,
    padding,
    background,
    other,
    position,
    border,
    pc,
    tablet,
    mobile,
    longMobile,
    //
    animation,
    term,
    //
    src,
    alt,
  } = props;
  const onImageError = (e) => {
    console.log(e);
  };

  return (
    <ImageStyle
      $size={size}
      $display={display}
      $margin={margin}
      $padding={padding}
      $background={background}
      $border={border}
      $other={other}
      $position={position}
      $pc={pc}
      $tablet={tablet}
      $mobile={mobile}
      $longMobile={longMobile}
      //
      $animation={animation}
      $term={term}
      //
      src={src}
      alt={alt}
      //

      onError={onImageError}
    />
  );
};

Image.propTypes = {
  ...ImageStyle.propTypes,
};

export default Image;
