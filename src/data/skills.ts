import { skills } from "@/content/skills";

export { skills };

export const skillGroups = skills.map((group) => ({
  title: group.category,
  items: [...group.items],
}));
