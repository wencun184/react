export function createElement(ele, props, ...children) {
  let vdom = {
    $$typeof: Symbol("react.element"),
    key: null,
    type: null,
    props: {},
  };
  vdom.type = ele;
  if (props !== null) {
    vdom.props = {
      ...props,
    };
  }
  if (children.length === 1) {
    vdom.props.children = children[0];
  }
  if (children.length > 1) {
    vdom.props.children = children;
  }

  return vdom;
}
