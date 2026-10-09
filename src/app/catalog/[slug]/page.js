import { notFound } from "next/navigation";
import CategoryCatalog from "@/components/Catalog/CategoryCatalog";
import { findCategoryBySlug } from "@/lib/categorySlug";

function childName(entry) {
  return typeof entry === "string" ? entry : entry.name;
}

export function generateMetadata({ params }) {
  const match = findCategoryBySlug(params.slug);
  return { title: match?.name || "Shopo" };
}

export default function CatalogCategoryPage({ params }) {
  const match = findCategoryBySlug(params.slug);
  if (!match) notFound();

  return (
    <CategoryCatalog
      name={match.name}
      parent={match.parent}
      childNames={match.children.map(childName)}
    />
  );
}
