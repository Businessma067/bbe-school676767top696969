import { Fragment, jsx as baseJsx, jsxs as baseJsxs } from "react/jsx-runtime";
import { localizeJsxProps } from "./render-text";

export { Fragment };

type JsxFn = typeof baseJsx;

export const jsx: JsxFn = (type, props, key) =>
  baseJsx(type, localizeJsxProps(type, props) as typeof props, key);

export const jsxs: JsxFn = (type, props, key) => {
  const next = localizeJsxProps(type, props) as typeof props;
  // Wrapping can turn a static children array into a single element.
  const build = Array.isArray((next as { children?: unknown }).children) ? baseJsxs : baseJsx;
  return build(type, next, key);
};
