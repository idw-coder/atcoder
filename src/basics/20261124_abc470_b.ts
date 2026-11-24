import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc470/tasks/abc470_b */

const N = Number(lines[0]);
const C = lines[1].split(' ').map(Number);

const count = new Array(N + 1).fill(0);
for (const c of C) {
  count[c]++;
}
console.log(N - Math.max(...count));
