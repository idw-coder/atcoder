import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc478/tasks/abc474_a */

const X = Number(lines[0]);
for (let i = 1; i <= 3; i++) {
  if (i !== X) {
    console.log(i);
    break;
  }
}
