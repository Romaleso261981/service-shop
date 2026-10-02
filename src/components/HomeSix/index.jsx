import datas from "../../data/products.json";
import SectionStyleOneHmSix from "../Helpers/SectionStyleOneHmSix";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import LayoutHomeSix from "../Partials/LayoutHomeSix";
import Banner from "./Banner";
import CampaignCountDown from "./CampaignCountDown";
import CategoriesSection from "./CategoriesSection";
import CTA from "./CTA";
import ProductsAds from "./ProductsAds";

import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("./Gallery"), {
  ssr: false,
});

export default function HomeSix() {
  const { products } = datas;
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });

  return (
    <>
      <LayoutHomeSix>
        <Banner />
        <ViewMoreTitle
          className="my-categories mb-[60px]"
          seeMoreUrl="/all-products"
          categoryTitle="Our Categories"
        >
          <CategoriesSection />
        </ViewMoreTitle>
        <SectionStyleOneHmSix
          products={products.slice(28, 34)}
          sectionTitle="Feature Design"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <CampaignCountDown
          className="mb-[60px]"
          lastDate="2025-10-04 4:00:00"
        />
        <ProductsAds
          ads={[`/assets/images/h6-s1.png`, `/assets/images/h6-s2.png`]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleOneHmSix
          products={products.slice(34, 43)}
          sectionTitle="New Arrivals"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <Gallery />
        <CTA />
      </LayoutHomeSix>
    </>
  );
}
