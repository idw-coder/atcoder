import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc478/tasks/abc478_c */

const [N, K] = lines[0].split(' ').map(Number);
const A = lines[1].split(' ').map(Number);

const sortedA = [...A].sort((a, b) => a - b);
let result = 'Yes';
let start = -1;
for (let i = 0; i < N; i++) {
  if (A[i] === sortedA[i]) continue;
  if (start === -1) {
    start = i;
  } else if (i - start + 1 > K) {
    result = 'No';
    break;
  }
}
console.log(result);
