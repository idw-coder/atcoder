import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc468/tasks/abc468_b */

const [M, D] = lines[0].split(' ').map(Number);
const S = lines[1].split('');

const W = new Array(M).fill(false);

for (const [i, s] of S.entries()) {
  if (s === 'G') {
    for (let d = -D; d <= D; d++) {
      if (0 <= i + d && i + d < M) W[i + d] = true;
    }
  }
}
console.log(W.filter((w) => !w).length);
