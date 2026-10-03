import Home from "@/components/Home";
import { ensureProductVariants, readProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = readProducts();
  await ensureProductVariants(products.map((product) => product.image));
  return <Home products={products} />;
}
