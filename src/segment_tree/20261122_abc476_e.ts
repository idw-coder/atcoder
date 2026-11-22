import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

/** https://atcoder.jp/contests/abc476/tasks/abc476_e */

const [N, M] = lines[0].split(' ').map(Number);
const P = lines[1].split(' ').map(Number);
const LR = Array.from({ length: M }, (_, i) =>
  lines[i + 2].split(' ').map(Number),
);

// Segment Tree
// tree の長さは、対象の配列の長さ 以上で最小の 2 のべき乗（size）の 2 倍
let size = 0;
for (let i = 0; ; i++) {
  if (N <= 2 ** i) {
    size = 2 ** i;
    break;
  }
}

// treeMin
const treeMin = new Array(size * 2).fill(Infinity);
for (let i = 0; i < N; i++) {
  treeMin[size + i] = P[i];
}
for (let i = size - 1; 0 < i; i--) {
  // size <= 2i では 元の配列の値同士の min
  // 2i < size では min 同士の min
  treeMin[i] = Math.min(treeMin[2 * i], treeMin[2 * i + 1]);
}

// treeMax
const treeMax = new Array(size * 2).fill(-Infinity);
for (let i = 0; i < N; i++) {
  treeMax[size + i] = P[i];
}
for (let i = size - 1; 0 < i; i--) {
  // size <= 2i では 元の配列の値同士の max
  // 2i < size では max 同士の max
  treeMax[i] = Math.max(treeMax[2 * i], treeMax[2 * i + 1]);
}

const rangeMin = (
  l: number,
  r: number,
  i: number,
  coverL: number,
  coverR: number,
): number => {
  // 全部区間の外
  if (coverR < l || r < coverL) {
    return Infinity;
  }
  // 全部区間の中
  if (l <= coverL && coverR <= r) {
    return treeMin[i];
  }
  // 一部だけ中
  const mid = Math.floor((coverL + coverR) / 2);
  const leftMin = rangeMin(l, r, 2 * i, coverL, mid);
  const rightMin = rangeMin(l, r, 2 * i + 1, mid + 1, coverR);
  return Math.min(leftMin, rightMin);
};

const rangeMax = (
  l: number,
  r: number,
  i: number,
  coverL: number,
  coverR: number,
): number => {
  // 全部区間の外
  if (coverR < l || r < coverL) {
    return -Infinity;
  }
  // 全部区間の中
  if (l <= coverL && coverR <= r) {
    return treeMax[i];
  }
  // 一部だけ中
  const mid = Math.floor((coverL + coverR) / 2);
  const leftMax = rangeMax(l, r, 2 * i, coverL, mid);
  const rightMax = rangeMax(l, r, 2 * i + 1, mid + 1, coverR);
  return Math.max(leftMax, rightMax);
};

const pos: number[] = new Array(N + 1);
for (let i = 0; i < N; i++) {
  pos[P[i]] = i;
}
// 位置 index の値を value に書き換えたときに treeMin を更新
const updateMin = (index: number, value: number) => {
  let i = size + index;
  treeMin[i] = value;
  while (i > 1) {
    i = Math.floor(i / 2);
    treeMin[i] = Math.min(treeMin[2 * i], treeMin[2 * i + 1]);
  }
};

// 位置 index の値を value に書き換えたときに treeMax を更新
const updateMax = (index: number, value: number) => {
  let i = size + index;
  treeMax[i] = value;
  while (i > 1) {
    i = Math.floor(i / 2);
    treeMax[i] = Math.max(treeMax[2 * i], treeMax[2 * i + 1]);
  }
};

for (const [L, R] of LR) {
  const l = L - 1,
    r = R - 1;
  const min = rangeMin(l, r, 1, 0, size - 1);
  const max = rangeMax(l, r, 1, 0, size - 1);
  const posMin = pos[min],
    posMax = pos[max];

  P[posMin] = max;
  P[posMax] = min;
  pos[min] = posMax;
  pos[max] = posMin;

  updateMin(posMin, max);
  updateMax(posMin, max);
  updateMin(posMax, min);
  updateMax(posMax, min);
}

console.log(P.join(' '));
