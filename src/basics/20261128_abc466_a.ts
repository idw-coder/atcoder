import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc466/tasks/abc466_a */

const X = lines[1].split(' ').map(Number);

let result = 'Yes';
for (const x of X) {
  if (x >= 0) {
    result = 'No';
    break;
  }
}
console.log(result);
