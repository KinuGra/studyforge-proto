// カテゴリ（数学、CS、英語…）
export type Category = {
  slug: string;
  title: string;
  description: string;
  icon?: string; // 絵文字
};

// 問題（拡張しやすいように discriminated union）
export type Question =
  | {
    id: string;
    type: "number";
    q: string;
    answer: number;
    explanation: string;
  }
  | {
    id: string;
    type: "choice";
    q: string;
    choices: string[];
    answerIndex: number;
    explanation: string;
  }
  | {
    id: string;
    type: "text";
    q: string;
    answer: string; // 正規化して比較する想定
    explanation: string;
  };

// トピック（例: 順列・組合せ、確率の基本、二分探索、現在完了 …）
export type Topic = {
  slug: string;
  categorySlug: string;
  title: string;
  summary: string;
  tags?: string[];
  formulas?: string[]; // KaTeX 文字列。なくてもOK
  usages?: { label: string; desc: string }[];
  questions: Question[];
};
