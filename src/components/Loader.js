import React from "react";

export default function Loader(props) {
  const { isReady, children: componentToRender } = props;

  if (isReady) return componentToRender;
  return <div>Content is loading...</div>;
}
