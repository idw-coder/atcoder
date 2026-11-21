import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc476/tasks/abc476_b */

const N = Number(lines[0]);
const S = lines[1];
const T = lines[2];

let isMatch = true;
for (let i = 0; i < N; i++) {
  if (T[i] === '*') continue;
  if (S[i] !== T[i]) {
    isMatch = false;
    break;
  }
}
console.log(isMatch ? 'Yes' : 'No');
