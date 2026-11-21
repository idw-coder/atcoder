import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc476/tasks/abc476_c */

const N = Number(lines[0]);
const A = lines[1].split(' ').map(Number);

const top3 = [Infinity, ...A.slice(0, 3).sort((a, b) => b - a)];
const result = [top3[3]];

for (const [index, a] of A.entries()) {
  if (index < 3) continue;
  if (top3[3] < a && a <= top3[2]) {
    top3[3] = a;
  } else if (top3[2] < a && a <= top3[1]) {
    top3.splice(2, 0, a);
    top3.pop();
  } else if (top3[1] < a) {
    top3.splice(1, 0, a);
    top3.pop();
  }

  result.push(top3[3]);
}

console.log(result.join('\n'));
