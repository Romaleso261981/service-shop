import datas from "../../data/products.json";
import SectionStyleFive from "../Helpers/SectionStyleFive";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import BrandSection from "../Home/BrandSection";
import LayoutHomeSeven from "../Partials/LayoutHomeSeven";
import Banner from "./Banner";
import CampaignCountDown from "./CampaignCountDown";
import CategoriesSection from "./CategoriesSection";
import CTA from "./CTA";
import Showcase from "./Showcase";
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("./Gallery"), {
  ssr: false,
});

export default function HomeSeven() {
  const { products } = datas;
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });
  return (
    <>
      <LayoutHomeSeven>
        <Banner />
        <ViewMoreTitle
          className="my-categories mb-[60px]"
          seeMoreUrl="/all-products"
          categoryTitle="Our Beauty Category"
        >
          <CategoriesSection />
        </ViewMoreTitle>
        <SectionStyleFive
          products={products.slice(43, 47)}
          sectionTitle="Top Selling Products"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <Showcase />
        <ViewMoreTitle
          className="top-selling-product mb-[60px]"
          seeMoreUrl="/all-products"
          categoryTitle="Popular Products"
        >
          <SectionStyleTwo products={products.slice(47, 51)} type={7} />
        </ViewMoreTitle>
        <CampaignCountDown
          className="mb-[60px]"
          lastDate="2025-10-04 4:00:00"
        />
        <SectionStyleFive
          products={products.slice(51, 63)}
          sectionTitle="Top Selling Products"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <BrandSection
          sectionTitle="Shop by Brand"
          className="brand-section-wrapper mb-[60px] "
          bg="bg-transparent"
        />
        <Gallery />
        <CTA />
      </LayoutHomeSeven>
    </>
  );
}
