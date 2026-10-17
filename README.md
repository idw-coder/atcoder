# atcoder-solutions

AtCoder の解答をアルゴリズム別に整理した学習記録です。

## ルール

- 開催中のコンテストの解答は push しない（コンテスト終了後に push する）
- 問題文は転載せず、URL で参照しています。（問題文の著作権）

## フォルダ構成

| フォルダ                  | 内容                |
| ------------------------- | ------------------- |
| `src/basics`              | 全探索, etc.        |
| `src/sorting`             | ソート              |
| `src/binary_search`       | 二分探索            |
| `src/two_pointers`        | 尺取り法            |
| `src/prefix_sum`          | 累積和              |
| `src/greedy`              | 貪欲法              |
| `src/dp`                  | 動的計画法          |
| `src/bit_search`          | bit全探索・bitDP    |
| `src/graph/bfs_dfs`       | BFS・DFS            |
| `src/graph/shortest_path` | 最短経路            |
| `src/graph/mst`           | 最小全域木          |
| `src/union_find`          | Union-Find          |
| `src/segment_tree`        | セグメント木        |
| `src/math`                | 整数論・組合せ・mod |
| `src/string`              | 文字列              |
| `src/misc`                | その他              |

## Usage

### 実行

```bash
node src/dp/abc300_d.ts < input/input01.txt
```

### ビルド

`src/` の `.ts` をまとめて JavaScript に変換し、`dist/` に出力します（`dist/` は毎回作り直され、Git の管理対象外）。

```bash
npm run build
node dist/dp/abc300_d.js < input/input01.txt
```

### 型チェック

```bash
npm run typecheck
```
