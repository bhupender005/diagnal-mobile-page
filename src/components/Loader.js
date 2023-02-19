import React from "react";
import PropTypes from "prop-types";

function Loader(props) {
  const { isReady, children: componentToRender } = props;

  if (isReady) return componentToRender;
  return <div>Content is loading...</div>;
}

Loader.propTypes = {
  isReady: PropTypes.bool,
};

Loader.defaultProps = {
  isReady: false,
};

export default Loader;
