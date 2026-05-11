# stdwords-jp

政府CIOポータルの「標準ガイドライン群用語集」を、検索や再利用が容易な形式に加工して公開するプロジェクトです。

## デモ & データ

- **[検索アプリ](https://code4fukui.github.io/stdwords-jp/)**: 用語を検索・閲覧できるWebアプリケーションです。
- **[CSV](https://code4fukui.github.io/stdwords-jp/hyoujun_guideline_yougosyu.csv)**: 機械処理に適したデータ形式です。
- **[HTML](https://code4fukui.github.io/stdwords-jp/hyoujun_guideline_yougosyu.html)**: Webページとして閲覧できる形式です。
- **[Markdown](hyoujun_guideline_yougosyu.md)**: プレーンテキストで可読性の高い形式です。

## 特徴

- **多様なフォーマット**: CSV、HTML、Markdown形式でデータを提供。
- **検索機能**: シンプルなWebインターフェースで用語を素早く検索可能。
- **更新履歴の明記**: 各用語には「追加年月日」と「最終更新年月日」が含まれています。
- **廃止用語の表示**: 「IT室」など、廃止された用語とその経緯が明記されています。

## 使い方 (開発者向け)

リポジトリのルートにあるCSVファイル (`hyoujun_guideline_yougosyu.csv`) がマスターデータです。このCSVからHTMLとMarkdownファイルを生成するには、Denoが必要です。

以下のコマンドを実行して、HTMLとMarkdownファイルを生成します。

```bash
deno run --allow-read --allow-write make.js
```

このスクリプトは `hyoujun_guideline_yougosyu.csv` を読み込み、`hyoujun_guideline_yougosyu.html` と `hyoujun_guideline_yougosyu.md` を出力します。

## データ構造

CSVファイルは以下のカラムで構成されています。

- `用語`
- `フリガナ`
- `定義`
- `追加年月日`
- `最終更新年月日`

## 出典

- **原データ**: [標準ガイドライン群 | 政府CIOポータル](https://cio.go.jp/guides)
- **本リポジトリの作成者**: [福野泰介](https://fukuno.jig.jp/3219) / Code for FUKUI
