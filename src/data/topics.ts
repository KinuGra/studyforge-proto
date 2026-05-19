import type { Topic } from "@/types";
import { permutationCombination } from "./math/permutation-combination";

export const topics: Topic[] = [
  permutationCombination,
  // ここに追加していく
];

export function getTopic(
  categorySlug: string,
  topicSlug: string,
): Topic | undefined {
  return topics.find(
    (t) => t.categorySlug === categorySlug && t.slug === topicSlug,
  );
}

export function getTopicsByCategory(categorySlug: string): Topic[] {
  return topics.filter((t) => t.categorySlug === categorySlug);
}
