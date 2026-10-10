import { categories } from "../data/categories";

const LETTERS = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  ё: "yo",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
  і: "i",
  ї: "yi",
  є: "ye",
  ґ: "g",
};

function isWordBoundary(char) {
  if (!char) return true;
  if (char === "ь" || char === "ъ") return true;
  return !/[a-z0-9а-яёіїєґ]/i.test(char);
}

export function categorySlug(name) {
  const source = String(name || "").toLowerCase();
  let slug = "";

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (char === "е") {
      slug += isWordBoundary(source[index - 1]) ? "ye" : "e";
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(LETTERS, char)) {
      slug += LETTERS[char];
      continue;
    }
    if (/[a-z0-9]/.test(char)) {
      slug += char;
      continue;
    }
    slug += "-";
  }

  return slug.replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function nodeName(entry) {
  return typeof entry === "string" ? entry : entry?.name || "";
}

function nodeChildren(entry) {
  if (!entry || typeof entry === "string" || !Array.isArray(entry.children)) return [];
  return entry.children;
}

export function categoryNodes(nodes = categories, parentPath = "") {
  return nodes.map((entry, index) => {
    const name = nodeName(entry);
    const slug = categorySlug(name);
    const path = parentPath ? `${parentPath}/${slug}` : slug;
    return {
      name,
      slug,
      path,
      sort: index,
      children: categoryNodes(nodeChildren(entry), path),
    };
  });
}

export function findCategoryBySlug(slug) {
  let best = null;

  function visit(entry, parent) {
    const name = nodeName(entry);
    if (!name) return;
    const children = nodeChildren(entry);
    if (categorySlug(name) === slug) {
      const candidate = {
        name,
        children,
        parent: parent ? { name: parent.name, slug: categorySlug(parent.name) } : null,
      };
      if (!best || children.length > best.children.length) best = candidate;
    }
    children.forEach((child) => visit(child, { name }));
  }

  categories.forEach((category) => visit(category, null));
  return best;
}
