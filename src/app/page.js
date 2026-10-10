import Home from "@/components/Home";
import { ensureProductVariants } from "@/lib/catalog";
import { searchProducts } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { products } = await searchProducts({ status: "active", limit: 24 });
  await ensureProductVariants(products.map((product) => product.image));
  return <Home products={products} />;
}
