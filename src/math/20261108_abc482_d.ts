import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** 数学 */
const N = Number(lines[0]);
const x = lines[1].split(' ').map(Number);
// console.error(x);

/** https://atcoder.jp/contests/abc482/tasks/abc482_d */

const result: number[] = [];

for (let k = 0; k < N; k++) {
  if (k === 0 || k === N - 1) result.push((x[N - 1] - x[0]) / 2);
  else {
    result.push(
      Math.min(
        Math.max((x[k] - x[0]) / 2, (x[N - 1] - x[k - 1]) / 2),
        Math.max((x[k + 1] - x[0]) / 2, (x[N - 1] - x[k]) / 2),
      ),
    );
  }
}
console.log(result.join('\n'));
