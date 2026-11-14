# ONE HOPE株式会社 コーポレートサイト リニューアル版 v4（2026-09-14）

方針：案A（白地・極太の日本語見出し・制作物サムネを全面に）× コムニコ寄せの落ち着き。クライアント名は業種表記、料金は非公開、自社メディアのフォロワー数は実測の実数を掲載。

## このフォルダの中身
- `index.html` … トップ
- `service/` `works/` `company/` `news/` `faq/` `contact/` `privacy/` … 各ページ（フォルダ＋index.html）
- `assets/` … CSS・JS・ロゴ画像・実績画像・favicon
- `sitemap.xml` `robots.txt` … 検索エンジン用
- `llms.txt` `llms-full.txt` … AI検索（ChatGPT・Claude・Perplexity等）に会社情報を正しく読ませるためのファイル（LLMO）
- `build_site.py` は同梱していません（元データはClaude作業フォルダ／Documentsの正本zip内）

## 公開方法（どれか1つ）
1. **今のサーバー（お名前.com）に静的HTMLとして置く**：WordPressを止めて、このフォルダの中身をドキュメントルートに丸ごとアップロード。一番速い。
2. **Cloudflare Pages / Netlify などの無料静的ホスティング**：フォルダをドラッグ&ドロップで公開し、onehope.co.jp のDNSを向ける。表示速度が最速でSEOに有利。
3. **WordPressのテーマとして移植**：制作会社に「このHTML/CSSをテーマ化してほしい」と渡す。お知らせ更新を自分でしたい場合はこれ。

※ 公開前に必ず `sitemap.xml` `robots.txt` `llms.txt` がルート直下にあることを確認。公開後にGoogle Search Consoleで sitemap.xml を送信。

## SEO・LLMOで実装済みのこと
- 全ページ固有の title / description / canonical / OGP
- 構造化データ（JSON-LD）：Organization＋ProfessionalService、Person（代表）、WebSite、WebPage、BreadcrumbList、FAQPage（トップ・FAQ）、ItemList（実績）
- 見出し階層（h1→h2→h3）、画像alt、セマンティックHTML、軽量（外部JSなし）
- llms.txt / llms-full.txt、robots.txt でAIクローラー（GPTBot・ClaudeBot・PerplexityBot等）を明示的に許可
- 会社名の表記ゆれをJSON-LDの alternateName で吸収（ワンホープ／ONE HOPE Inc.／ONEHOPE）
- 外部サイト（メディアレーダー・イプロス・gBizINFO）へ sameAs で紐づけ

## 公開前に横張さんに確認してほしいこと
1. **自社メディアの総フォロワー数**：19アカウント（IG9・X3・TikTok4・YouTube3）の2026-09-14実測合計＝577,005人。1,000人未満などのアカウントは一覧に出さず「その他9アカウント」として合計のみ表示。
2. **TikTokの数値**：埋め込みページの値（38,400）は丸められている可能性あり。管理画面の実数に差し替え推奨。
3. **サムネイルの更新頻度**：トップと各ページの投稿サムネは2026-09-13時点の投稿。月1回、生成スクリプトで差し替える運用に。
4. **代表写真**：フリーランス名鑑のアイコン（300px）を使用中。原本があれば差し替え。
5. **沿革の推定年**：2022年（代理店取引本格化）・2024年（自社メディア拡大）は資料からの推定。
6. **英語表記**：サイトは「ONE HOPE Inc.」で統一。請求書は「ONE HOPE Co., Ltd.」。
7. **お問い合わせ**：メールソフト起動方式。フォーム受信にしたい場合は formrun / Googleフォームを埋め込み（所要10分）。
8. **採用ページ**：廃止。募集再開時に追加。

## 今後のSEO・LLMO強化（次の一手）
- 「コラム」ページを追加し、月2本ペースで「SNS運用代行 費用相場」「代理店向け SNS運用 外注」「採用TikTok 事例」などの記事を投稿（検索流入の柱）
- 実績ページを1社1ページ化（`/works/super-hotel/` 等）してロングテール対策
- Google ビジネスプロフィールの整備（常総市＋東京）
- メディアレーダー・イプロス・Web幹事など外部掲載の情報を新サイトの記載と揃える（AIの回答の一貫性が上がる）
