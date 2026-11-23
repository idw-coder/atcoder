import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc478/tasks/abc474_c */

const [N, Q] = lines[0].split(' ').map(Number);
const P = lines[1].split(' ').map(Number);
const A = Array.from({ length: Q }, (_, index) => Number(lines[index + 2]));

const time = new Array(N + 1).fill(0);
for (const [i, p] of P.entries()) {
  time[p] = i;
}
for (const [i, a] of A.entries()) {
  time[a] = N + i;
}
console.log(P.sort((a, b) => time[a] - time[b]).join(' '));
