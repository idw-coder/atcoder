import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/**  */
const grid = Array.from({ length: 5 }, (_, index) => {
  return lines[index].split('');
});

// console.table(grid);

/** https://atcoder.jp/contests/abc482/tasks/abc482_b */
const count = (s: string[]) => s.filter((v) => v === '.').length;

let result = 5;

for (let row = 0; row < 5; row++) {
  result = Math.min(result, count(grid[row]));
}
for (let col = 0; col < 5; col++) {
  result = Math.min(result, count(grid.map((row) => row[col])));
}
result = Math.min(result, count(grid.map((row, i) => row[i])));
result = Math.min(result, count(grid.map((row, i) => row[4 - i])));

console.log(result);
