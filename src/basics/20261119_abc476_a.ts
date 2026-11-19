import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc476/tasks/abc476_a */

const S = lines[0];
console.log(S.at(-1) === 'e' ? S + 'r' : S + 'er');
