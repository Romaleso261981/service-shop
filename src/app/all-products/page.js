import AllProductPage from "@/components/AllProductPage/index";
import { readProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default function allproducts() {
  return <AllProductPage products={readProducts()} />;
}
