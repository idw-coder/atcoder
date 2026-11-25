import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc468/tasks/abc468_a */

const N = Number(lines[0]);
const A = lines[1].split(' ').map(Number);

let result = 0;

for (let i = 0; i < N - 2; i++) {
  if (A[i] < A[i + 1] && A[i + 1] > A[i + 2]) result++;
}
console.log(result);
