import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "math",
    title: "数学",
    description: "場合の数、確率・期待値など。競プロ・就活SPIにも応用",
    icon: "🧮",
  },
  // 将来用に枠だけ置いておく
  // {
  //   slug: "cs",
  //   title: "コンピュータサイエンス",
  //   description: "アルゴリズム、データ構造、計算量",
  //   icon: "💻",
  // },
  // {
  //   slug: "english",
  //   title: "英語",
  //   description: "技術英語、TOEIC頻出語彙",
  //   icon: "🇬",
  // },
  // {
  //   slug: "tech-selection",
  //   title: "技術選定",
  //   description: "DB・フレームワーク・インフラの比較",
  //   icon: "🛠",
  // },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
