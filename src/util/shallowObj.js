export function isObj(obj) {
  return obj !== null && (typeof obj === "object" || typeof obj === "function");
}
export default function shallowEqua(objA, objB) {
  if (!isObj(objA) || !isObj(objB)) return false;
  if (objA === objB) return true;
  let keysA = Reflect.ownKeys(objA);
  let keysB = Reflect.ownKeys(objB);
  if (keysA.length !== keysB.length) return false;
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!objB.hasOwnProperty(key) || !Object.is(objA[i], objB[i])) return false;
  }
  return true;
}
