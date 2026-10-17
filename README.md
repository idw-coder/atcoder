# atcoder-solutions

AtCoder の解答をアルゴリズム別に整理した学習記録です。

## ルール

- 開催中のコンテストの解答は push しない（コンテスト終了後に push する）
- 問題文は転載せず、URL で参照しています。（問題文の著作権）

## フォルダ構成

| フォルダ                  | 内容                           |
| ------------------------- | ------------------------------ |
| `src/basics`              | 全探索・シミュレーション・実装 |
| `src/sorting`             | ソート                         |
| `src/binary_search`       | 二分探索                       |
| `src/two_pointers`        | 尺取り法                       |
| `src/prefix_sum`          | 累積和                         |
| `src/greedy`              | 貪欲法                         |
| `src/dp`                  | 動的計画法                     |
| `src/bit_search`          | bit全探索・bitDP               |
| `src/graph/bfs_dfs`       | BFS・DFS                       |
| `src/graph/shortest_path` | 最短経路                       |
| `src/graph/mst`           | 最小全域木                     |
| `src/union_find`          | Union-Find                     |
| `src/segment_tree`        | セグメント木                   |
| `src/math`                | 整数論・組合せ・mod            |
| `src/string`              | 文字列                         |
| `src/misc`                | その他                         |
| `templates`               | 言語ごとのテンプレート         |

## セットアップ

```bash
npm install
```

## 問題の追加

テンプレートをコピーして、`src/<フォルダ>/<コンテストID>_<問題ID>.<拡張子>` という名前で保存します。

```bash
cp templates/solution.ts src/dp/abc300_d.ts
```

## 実行

サンプル入力を `input/input01.txt` などに保存して実行します

```bash
node src/dp/abc300_d.ts < input/input01.txt
```

Node.js v23.6 以降は `.ts` をそのまま実行できます。`MODULE_TYPELESS_PACKAGE_JSON` という警告が出ますが、動作には影響ありません。
