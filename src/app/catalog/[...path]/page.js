import { notFound, redirect } from "next/navigation";
import CategoryCatalog from "@/components/Catalog/CategoryCatalog";
import {
  categoriesBySuffix,
  categoryBreadcrumb,
  descendantIds,
  getCategoryByPath,
  listChildCategories,
  searchProducts,
} from "@/lib/store";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const categoryPath = params.path.map(decodeURIComponent).join("/");
  const category = await getCategoryByPath(categoryPath);
  return { title: category?.name || "Shopo" };
}

export default async function CatalogCategoryPage({ params }) {
  const categoryPath = params.path.map(decodeURIComponent).join("/");
  const category = await getCategoryByPath(categoryPath);
  if (!category) {
    const matches = await categoriesBySuffix(categoryPath);
    if (matches.length === 1) redirect(`/catalog/${matches[0].path}`);
    notFound();
  }
  const categoryIds = await descendantIds(category.id);
  const [children, crumbs, result] = await Promise.all([
    listChildCategories(category.id),
    categoryBreadcrumb(category.id),
    searchProducts({ status: "active", categoryIds, limit: 24 }),
  ]);
  return (
    <CategoryCatalog
      name={category.name}
      path={category.path}
      crumbs={crumbs.slice(0, -1)}
      children={children}
      products={result.products}
      total={result.total}
    />
  );
}
