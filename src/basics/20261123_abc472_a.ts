import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc478/tasks/abc474_a */
const A = lines[0].split('');
for (const [i, a] of A.entries()) {
  if (a !== 'A') A[i] = '.';
}
console.log(A.join(''));
