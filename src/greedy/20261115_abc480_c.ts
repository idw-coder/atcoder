import { readFileSync } from 'fs';
import { argv0 } from 'process';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [N, K, T] = lines[0].split(' ').map(Number);
const A = lines[1].split(' ').map(Number);
// console.log(N, K, T);
// console.table(A);

/** https://atcoder.jp/contests/abc480/tasks/abc480_c */

function main() {
  const sorted = A.sort((a, b) => a - b);
  let result = sorted[0] === 0 ? 0 : 1;
  for (const [index, a] of sorted.entries()) {
    if (a < T) {
      const prev = index > 0 ? sorted[index - 1] : 0;
      result += Math.max(0, Math.ceil((a - prev) / K) - 1);
    }
  }
  const last = [...sorted].reverse().find((a) => a < T) ?? 0;
  if (last < T) {
    result += Math.ceil((T - last) / K) - 1;
  }
  console.log(result);
}
main();
