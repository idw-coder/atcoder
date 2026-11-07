import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/**  */
const S = lines[0];

/** https://atcoder.jp/contests/abc482/tasks/abc482_a */

console.log((S.match(/o/g) || []).length % 2 === 0 ? 'even' : 'odd');
