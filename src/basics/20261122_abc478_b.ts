import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc478/tasks/abc478_b */

const [N, V] = lines[0].split(' ').map(Number);
const W = lines[1].split(' ').map(Number);

let result = 0;
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      if (V < i + j + k + 3) continue;
      result = Math.max(result, W[i] + W[j] + W[k]);
    }
  }
}
console.log(result);
