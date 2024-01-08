// 该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对
// 上节中写 type 函数时，用来存放 toString 映射结果的对象
const class2type = {};
// 相当于 Object.prototype.toString
const toString = class2type.toString;
// 相当于 Object.prototype.hasOwnProperty
const hasOwn = class2type.hasOwnProperty;
export function isPlainObject(obj) {
  let proto, Ctor;
  // 排除掉明显不是obj的以及一些宿主对象如Window
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }
  /**
   * getPrototypeOf es5 方法，获取 obj 的原型
   * 以 new Object 创建的对象为例的话
   * obj.__proto__ === Object.prototype
   */
  proto = Object.getPrototypeOf(obj);
  // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
  if (!proto) {
    return true;
  }
  /**
   * 以下判断通过 new Object 方式创建的对象
   * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
   * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
   */
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
  // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
  return (
    typeof Ctor === "function" &&
    hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
  );
}
// const utils = {
//   isPlainObject,
// };
/*导出API */
// if (typeof window !== "undefined") window.utils = window._ = utils;
// if (typeof module === "object" && typeof module.exports === "object")
// export default utils;
