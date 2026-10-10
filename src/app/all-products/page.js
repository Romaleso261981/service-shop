import AllProductPage from "@/components/AllProductPage/index";
import { parseMoney } from "@/lib/money";
import { descendantIds, getCategoryByPath, listBrands, searchProducts } from "@/lib/store";

export const dynamic = "force-dynamic";

const STOCK = ["in", "out", "order"];

export default async function allproducts({ searchParams }) {
  const category = searchParams.category
    ? await getCategoryByPath(searchParams.category)
    : null;
  const categoryIds = category ? await descendantIds(category.id) : null;
  const min = parseMoney(searchParams.min || "");
  const max = parseMoney(searchParams.max || "");
  const result = await searchProducts({
    q: searchParams.q || "",
    brand: searchParams.brand || "",
    stock: STOCK.includes(searchParams.stock) ? searchParams.stock : "",
    min,
    max,
    status: "active",
    categoryIds,
    page: searchParams.page || 1,
  });
  const brands = await listBrands();
  return (
    <AllProductPage
      products={result.products}
      total={result.total}
      page={result.page}
      limit={result.limit}
      brands={brands}
      query={searchParams}
    />
  );
}
