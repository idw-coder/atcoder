import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc478/tasks/abc472_c */

const [N, M, K] = lines[0].split(' ').map(Number);
const A = lines[1].split(' ').map(Number);

const keep: number[] = [];
let total = 0;
const result: ('Yes' | 'No')[] = [];
for (let i = 0; i < N; i++) {
  if (total + A[i] <= K) {
    result.push('Yes');
    keep.push(A[i]);
  } else {
    result.push('No');
    keep.push(0);
  }
  if (i - M + 1 >= 0) {
    total -= keep[i - M + 1];
  }
  total += keep[i];
}
console.log(result.join('\n'));
