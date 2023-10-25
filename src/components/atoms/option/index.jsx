import PropTypes from "prop-types";
import OptionStyle from "./option.style";

const Option = (props) => {
  const { name, children, ...etc } = props;
  return <OptionStyle {...etc}>{children}</OptionStyle>;
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default Option;
