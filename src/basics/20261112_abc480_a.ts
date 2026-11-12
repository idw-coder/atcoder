import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc480/tasks/abc480_a */

const A = [-1, -1];
const D = [-1, -1];

for (let row = 0; row < 2; row++) {
  for (let col = 0; col < 2; col++) {
    if (lines[row][col] === 'A') {
      A[0] = row;
      A[1] = col;
    } else if (lines[row][col] === 'D') {
      D[0] = row;
      D[1] = col;
    }
  }
}

console.log(Math.abs(A[0] - D[0]) + Math.abs(A[1] - D[1]) === 1 ? 'Yes' : 'No');
