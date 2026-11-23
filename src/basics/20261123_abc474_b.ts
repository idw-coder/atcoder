import { link, readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc478/tasks/abc474_b */

const N = Number(lines[0]);
const P = lines[1].split(' ').map(Number);

let result = 'Yes';
for (const [i, p] of P.entries()) {
  if (Math.floor((p - 1) / 10) !== Math.floor(i / 10)) {
    result = 'No';
    break;
  }
}
console.log(result);
