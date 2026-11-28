import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc468/tasks/abc468_c */

const N = Number(lines[0]);
const P = lines[1].split(' ').map(Number);
const Q = lines[2].split(' ').map(Number);

// 辞書順比較
const isLess = (S: number[], T: number[]): boolean => {
  for (let i = 0; i < N; i++) {
    if (S[i] !== T[i]) return S[i] < T[i];
  }
  return false;
};

// 全順列を perm に順次格納
const perm = new Array(N).fill(0);
const used = new Array(N + 1).fill(false);
let count = 0;
// 全順列生成しながら isLess で比較
const generate = (pos: number): void => {
  if (pos === N) {
    if (isLess(P, perm) && isLess(perm, Q)) count++;

    return;
  }
  for (let x = 1; x <= N; x++) {
    if (used[x]) continue;
    perm[pos] = x;
    used[x] = true;
    generate(pos + 1);
    used[x] = false;
  }
};

generate(0);
console.log(count);
