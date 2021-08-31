import { CSV } from "https://js.sabae.cc/CSV.js";

const data = CSV.toJSON(await CSV.fetch("./hyoujun_guideline_yougosyu.csv"));
const md = [];
md.push("# 標準ガイドライン群用語集");
md.push("");
data.sort((a, b) => -a.最終更新年月日.localeCompare(b.最終更新年月日));
for (const d of data) {
  md.push(`## ${d.用語} (${d.フリガナ})`);
  md.push("");
  md.push(d.定義);
  md.push("");
  md.push(`追加年月日: ${d.追加年月日}, 更新年月日: ${d.最終更新年月日}`);
  md.push("");
}
await Deno.writeTextFile("hyojun_guideline_yougosyu.md", md.join("\n"));
