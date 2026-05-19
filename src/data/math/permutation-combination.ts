import type { Topic } from "@/types";

export const permutationCombination: Topic = {
  slug: "permutation-combination",
  categorySlug: "math",
  title: "順列・組合せ (nPr, nCr)",
  summary:
    "並べる（順列）か選ぶ（組合せ）かを区別する。順序を区別するなら P、しないなら C。",
  tags: ["競プロ:数え上げ", "就活:SPI非言語"],
  formulas: [
    "{}_n P_r = \\frac{n!}{(n-r)!}",
    "{}_n C_r = \\frac{n!}{r!\\,(n-r)!}",
  ],
  usages: [
    {
      label: "競プロ",
      desc: "数え上げ問題",
    },
    {
      label: "就活",
      desc: "SPI非言語の頻出単元。",
    },
  ],
  questions: [
    {
      id: "pc-1",
      type: "number",
      q: "5人から3人を選んで一列に並べる方法は何通り？",
      answer: 60,
      explanation: "5P3 = 5×4×3 = 60 通り。順序を区別するので順列。",
    },
    {
      id: "pc-2",
      type: "number",
      q: "10人から3人を選ぶ方法は何通り？",
      answer: 120,
      explanation:
        "10C3 = 10!/(3!×7!) = 120 通り。順序を区別しないので組合せ。",
    },
    {
      id: "pc-3",
      type: "choice",
      q: "bit全探索で n=20 のとき、試す全パターン数は？",
      choices: ["2^10", "2^20", "20!", "20^2"],
      answerIndex: 1,
      explanation:
        "各要素を選ぶ/選ばないの2択を n 回繰り返すので 2^n。n=20 なら 2^20 ≒ 100万通り。",
    },
    {
      id: "pc-4",
      type: "choice",
      q: "「ABCDEFG」の7文字を一列に並べる方法は何通り？",
      choices: ["7", "49", "5040", "823543"],
      answerIndex: 2,
      explanation: "7! = 5040 通り。全文字を並べる順列。",
    },
  ],
};
