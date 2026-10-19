/**
 * Combines class names cleanly, filtering out falsy values.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
