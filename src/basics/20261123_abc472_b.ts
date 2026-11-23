import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc478/tasks/abc472_b */

const N = Number(lines[0]);
const L = lines[1].split(' ').map(Number);
let diff = L.reduce((acc, curr) => acc + curr, 0);
let result = L.reduce((acc, curr) => acc + curr, 0);
for (const l of L) {
  diff = diff - l * 2;
  result = Math.min(result, Math.abs(diff));
}

console.log(result);
