import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [N, M] = lines[0].split(' ').map(Number);

/** https://atcoder.jp/contests/abc478/tasks/abc478_a */

const quotient = Math.floor(M / N);
const remainder = M % N;

const result = Array.from({ length: N }, (_, index) =>
  index < remainder ? quotient + 1 : quotient,
);

console.log(result.join('\n'));
