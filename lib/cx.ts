// Tiny className helper. Wraps clsx but kept tiny so tree-shaking is trivial.
import { clsx, type ClassValue } from "clsx";

export function cx(...inputs: ClassValue[]) {
  return clsx(inputs);
}
