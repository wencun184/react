import React from "react";
export default function PropsDome(props) {
  let { children } = props;
  children = React.Children.toArray(children);
  const headerSlot = children.filter((v) => v.props.slot === "header");
  const footerSlot = children.filter((v) => v.props.slot === "footer");
  const defaultSlot = children.filter((v) => !v.props.slot);
  return (
    <>
      {headerSlot}
      <div>lalal</div>
      {defaultSlot}
      {footerSlot}
    </>
  );
}
