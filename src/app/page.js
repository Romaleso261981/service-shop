import Home from "@/components/Home";
import { readProducts } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return <Home products={readProducts()} />;
}
