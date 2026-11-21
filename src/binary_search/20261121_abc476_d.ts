import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc476/tasks/abc476_c */

const [N, M, K] = lines[0].split(' ').map(Number);
const [X, Y] = lines[1].split(' ').map(Number);
const A = lines[2].split(' ').map(Number);
const B = lines[3].split(' ').map(Number);
A.sort((a, b) => a - b);
B.sort((a, b) => a - b);
const prefA = [0];
for (let i = 0; i < N; i++) {
  prefA.push(prefA[i] + A[i]);
}
const prefB = [0];
for (let i = 0; i < M; i++) {
  prefB.push(prefB[i] + B[i]);
}
const prefC = [0];
for (let i = 0; i < M; i++) {
  prefC.push(prefC[i] + Math.ceil(B[i] / K));
}
const total = X + Y * K;
let result = 0;
for (let i = 0; i <= M; i++) {
  if (Y < prefC[i]) break;
  const rest = total - prefB[i];
  let lo = 0;
  let hi = N;
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    if (prefA[mid] <= rest) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }
  result = Math.max(result, i + lo);
}
console.log(result);
