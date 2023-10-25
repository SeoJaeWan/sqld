import LineBreakStyle from "./lineBreak.style";

const LineBreak = (props) => {
  const { display, mobile, longMobile, tablet, pc } = props;

  return (
    <LineBreakStyle
      $display={display}
      //
      $mobile={mobile}
      $longMobile={longMobile}
      $tablet={tablet}
      $pc={pc}
    />
  );
};

export default LineBreak;
