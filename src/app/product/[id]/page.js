import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { getPublicProduct } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const product = await getPublicProduct(params.id);
  if (!product) return { title: "Shopo" };
  return {
    title: product.seo_title || product.title,
    description: product.seo_description || product.description.slice(0, 160),
  };
}

export default async function Page({ params }) {
  const product = await getPublicProduct(params.id);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
