import * as repo1 from '@epdoc/amod';
import * as repo2 from '@epdoc/bmod';

export function add(a: number, b: number): number {
  return repo1.add(a, b);
}
export function subtract(a: number, b: number): number {
  return repo2.subtract(a, b);
}
