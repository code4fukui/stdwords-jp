import { csv2md } from "https://js.sabae.cc/csv2md.js";
import { marked } from "https://taisukef.github.io/marked_md/marked.js";

const fn = "./hyoujun_guideline_yougosyu.csv";

const md = await csv2md({
  filename: fn,
  title: "標準ガイドライン群用語集",
  name: "用語",
  body: "定義",
  sortkey: "最終更新年月日"
});

const html = "<meta charset='utf-8'><title>標準ガイドライン群用語集</title>\n" + marked(md) + "<hr><a href=https://github.com/code4fukui/stdwords-jp>src on GitHub</a>";
await Deno.writeTextFile(fn.substring(0, fn.length - 3) + "html", html);
