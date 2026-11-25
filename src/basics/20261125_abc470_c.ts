import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc470/tasks/abc470_c */

const [N, Q] = lines[0].split(' ').map(Number);
const queries = Array.from({ length: Q }, (_, i) =>
  lines[i + 1].split(' ').map(Number),
);
const A = new Array(N + 1).fill(0);
const oneOrMore = new Set<number>();
const result: number[] = [];
let xor = 0;
for (const [type, x] of queries) {
  if (type === 1) {
    oneOrMore.add(x);
    xor ^= A[x];
    A[x]++;
    xor ^= A[x];
  } else {
    for (const o of oneOrMore) {
      xor ^= A[o];
      A[o]--;
      xor ^= A[o];
      if (A[o] === 0) oneOrMore.delete(o);
    }
  }
  result.push(xor);
}

console.log(result.join('\n'));
