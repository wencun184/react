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
function each(obj, callback) {
  if (typeof callback !== "function") return;
  const arr = Reflect.ownKeys(obj);
  arr.forEach((key) => {
    callback(key, obj[key]);
  });
}
export function render(vdom, element) {
  const { type, props } = vdom;
  if (typeof type === "string") {
    let ele = document.createElement(type);
    each(props, (key, value) => {
      if (key === "className") {
        ele.className = value;
      }
      if (key === "style") {
        each(value, (k, v) => {
          ele.style[k] = v;
        });
      }
      if (key === "children") {
        if (typeof props[key] !== "object") {
          ele.appendChild(document.createTextNode(value));
        } else {
          props[key].forEach((v) => {
            render(v, ele);
          });
        }
      }
    });
    element.appendChild(ele);
  }
}
