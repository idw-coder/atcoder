import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

const [N, M] = lines[0].split(' ').map(Number);
const S = Array.from({ length: N }, (_, index) => lines[index + 1]);
const T = Array.from({ length: M }, (_, index) => lines[index + N + 1]);
const votes = new Array(N).fill(0);
// console.table(S);
// console.table(T);

/** https://atcoder.jp/contests/abc480/tasks/abc480_a */

const isOneCharDiff = (s: string, t: string) => {
  if (s.length !== t.length) return false;
  let diff = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) diff++;
    if (diff > 1) return false;
  }
  if (diff === 1) return true;
};

outer: for (const t of T) {
  let updateIndex = -1;
  let updateCount = 0;
  inner: for (const [sIndex, s] of S.entries()) {
    if (s === t) {
      votes[sIndex] = votes[sIndex] + 1;
      continue outer;
    }
    if (isOneCharDiff(s, t)) {
      updateIndex = sIndex;
      updateCount++;
    }
  }
  if (updateCount === 1) {
    votes[updateIndex] = votes[updateIndex] + 1;
  }
}

console.log(votes.join('\n'));
