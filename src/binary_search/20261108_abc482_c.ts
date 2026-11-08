import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** 二分探索 */
const [H, W, N, Q] = lines[0].split(' ').map(Number);

const pieces = Array.from({ length: N }, (_, index) => {
  return lines[index + 1].split(' ').map(Number);
});

const sortedRow = pieces.map((p) => p[0]).sort((a, b) => a - b);
const sortedCol = pieces.map((p) => p[1]).sort((a, b) => a - b);
const queries = Array.from({ length: Q }, (_, index) => {
  return lines[index + N + 1].split(' ').map(Number);
});

const countLess = (arr: number[], r: number) => {
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] <= r) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

// console.error(H, W, N, Q);
// console.error(sortedRow);
// console.error(sortedCol);
/** https://atcoder.jp/contests/abc482/tasks/abc482_c */
const result: number[] = [];
for (const query of queries) {
  if (query[0] === 1)
    result.push(
      countLess(sortedRow, query[2]) - countLess(sortedRow, query[1] - 1),
    );
  else
    result.push(
      countLess(sortedCol, query[2]) - countLess(sortedCol, query[1] - 1),
    );
}
console.log(result.join('\n'));
