import datas from "../../data/products.json";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
// import Ads from "./Ads";
import Banner from "./Banner";
import BestSellers from "./BestSellers";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";
import ProductsAds from "./ProductsAds";

export default function Home() {
  const { products } = datas;
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });

  return (
    <>
      <Layout>
        {/* {ads && <Ads handler={adsHandle} />} */}
        <div className="btn w-5 h-5 "></div>
        <Banner className="banner-wrapper mb-[60px]" />
        <SectionStyleOne
          products={products}
          brands={brands}
          categoryTitle="mobileTablet"
          sectionTitle="gamerWorld"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        <BrandSection
          sectionTitle="shopByBrand"
          className="brand-section-wrapper mb-[60px]"
        />
        <CampaignCountDown
          className="mb-[60px]"
          lastDate="2025-10-04 4:00:00"
        />
        <ViewMoreTitle
          className="top-selling-product mb-[60px]"
          seeMoreUrl="/all-products"
          categoryTitle="topSelling"
        >
          <SectionStyleTwo products={products.slice(3, products.length)} />
        </ViewMoreTitle>
        <ViewMoreTitle
          className="best-sallers-section mb-[60px]"
          seeMoreUrl="/sallers"
          categoryTitle="bestSeller"
        >
          <BestSellers />
        </ViewMoreTitle>
        <ProductsAds
          ads={[`/assets/images/bannera-1.png`, `/assets/images/bannera-2.png`]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleOne
          categoryBackground={`/assets/images/section-category-2.jpg`}
          products={products.slice(4, products.length)}
          brands={brands}
          categoryTitle="electronics"
          sectionTitle="popularSales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        <ProductsAds
          ads={[`/assets/images/bannera-3.png`]}
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleThree
          products={products}
          sectionTitle="newArrivals"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <ProductsAds
          sectionHeight="164"
          ads={[`assets/images/bannera-4.png`]}
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleFour
          products={products}
          sectionTitle="popularSales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
      </Layout>
    </>
  );
}
