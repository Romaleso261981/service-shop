import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { readProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default function Page({ params }) {
  const product = readProducts().find((item) => item.id === params.id);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
