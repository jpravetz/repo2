import * as amod from '@epdoc/amod';
import * as bmod from '@epdoc/bmod';

export function add(a: number, b: number): number {
  return amod.add(a, b);
}
export function subtract(a: number, b: number): number {
  return bmod.subtract(a, b);
}
