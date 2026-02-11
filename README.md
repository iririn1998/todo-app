# TODO App

ニューモーフィズムデザインの TODO アプリケーションです。

## 技術スタック

| カテゴリ               | ツール                |
| ---------------------- | --------------------- |
| フレームワーク         | React 19 + TypeScript |
| ビルド                 | Vite 7                |
| コンポーネントカタログ | Storybook 10          |
| テスト                 | Vitest + Playwright   |
| リンター               | oxlint                |
| フォーマッター         | oxfmt                 |
| パッケージマネージャー | pnpm                  |

## 機能

- **追加** — テキスト入力フォームから新しい TODO を作成
- **一覧表示** — 全 TODO をリスト表示（件数・完了数のサマリー付き）
- **編集** — インライン編集で TODO のテキストを変更
- **削除** — 不要な TODO を即時削除
- **完了切替** — チェックボックスで完了/未完了を切り替え

## セットアップ

```bash
pnpm install
```

## 開発コマンド

```bash
# 開発サーバー起動
pnpm dev

# プロダクションビルド
pnpm build

# ビルドプレビュー
pnpm preview

# Storybook 起動
pnpm storybook

# Storybook ビルド
pnpm build-storybook

# リント
pnpm lint

# リント（自動修正）
pnpm lint:fix

# フォーマット
pnpm format

# フォーマットチェック
pnpm format:check
```

## ディレクトリ構成

```
src/
├── components/          # アプリケーションコンポーネント
│   └── TodoApp/
│       ├── index.tsx             # メインコンポーネント（状態管理）
│       ├── index.module.css
│       ├── index.stories.tsx
│       ├── types.ts              # Todo 型定義
│       ├── TodoForm/             # TODO 追加フォーム
│       ├── TodoItem/             # TODO 個別アイテム（編集・削除）
│       └── TodoList/             # TODO 一覧表示
├── ui/                  # 汎用 UI コンポーネント
│   ├── Button/
│   ├── Checkbox/
│   └── TextInput/
└── styles/
    └── tokens.css       # デザイントークン
```

## デザインシステム

ニューモーフィズムスタイルのデザインシステムを採用しています。

- **デザイントークン** — `src/styles/tokens.css` にカラー・スペーシング・角丸・フォントサイズなどの CSS カスタムプロパティを定義
- **CSS Modules** — コンポーネントごとに `index.module.css` でスコープ付きスタイルを管理
- **RSCSS 命名規則** — `.neu-button`、`.is-primary` のようなコンポーネント・バリアント命名

### トークン一覧

| カテゴリ          | プレフィックス     | 例                                 |
| ----------------- | ------------------ | ---------------------------------- |
| カラー（ベース）  | `--color-`         | `--color-bg`, `--color-text`       |
| カラー（Primary） | `--color-primary-` | `--color-primary-bg`               |
| カラー（Success） | `--color-success-` | `--color-success-text`             |
| カラー（Danger）  | `--color-danger-`  | `--color-danger-text`              |
| スペーシング      | `--space-`         | `--space-sm`, `--space-md`         |
| 角丸              | `--radius-`        | `--radius-sm`, `--radius-lg`       |
| フォントサイズ    | `--font-size-`     | `--font-size-md`, `--font-size-xl` |
| トランジション    | `--transition-`    | `--transition-default`             |
