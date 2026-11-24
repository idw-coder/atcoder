import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc470/tasks/abc470_a */

const N = Number(lines[0]);
const result: (number | string)[] = [];
for (let i = 1; i <= N; i++) {
  if (i % 3 === 0) result.push('Fizz');
  else result.push(i);
}
console.log(result.join('\n'));
