import { Fragment, jsxDEV as baseJsxDEV } from "react/jsx-dev-runtime";
import { localizeJsxProps } from "./render-text";

export { Fragment };

export const jsxDEV: typeof baseJsxDEV = (type, props, key, isStatic, source, self) => {
  const next = localizeJsxProps(type, props) as typeof props;
  // Wrapping can turn a static children array into a single element.
  const staticChildren = isStatic && Array.isArray((next as { children?: unknown }).children);
  return baseJsxDEV(type, next, key, staticChildren, source, self);
};
