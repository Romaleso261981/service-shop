import { bannerSlot } from "../../lib/bannerRotate";
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

function photos(products) {
  const seen = new Set();
  return products.filter((product) => {
    if (!product?.image || seen.has(product.image)) return false;
    seen.add(product.image);
    return true;
  });
}

const FAMOUS_BRANDS = ["Electrolux", "Bosch", "Samsung", "Gorenje", "Whirlpool", "Zanussi", "AEG", "Indesit"];

function mainBrands(products) {
  const present = new Set();
  products.forEach((product) => {
    String(product.brand || "")
      .split(",")
      .map((part) => part.trim().toLowerCase())
      .filter(Boolean)
      .forEach((brand) => present.add(brand));
  });
  return FAMOUS_BRANDS.filter((brand) => present.has(brand.toLowerCase())).map((brand) => ({
    name: brand,
    href: `/all-products?q=${encodeURIComponent(brand)}`,
  }));
}

export default function Home({ products = [] }) {
  const brands = mainBrands(products);
  const shots = photos(products);
  const shot = (index) => (shots.length ? shots[index % shots.length] : null);
  const ad = (index) => {
    const product = shot(index);
    return product ? `/assets/images/${product.image}` : "";
  };
  const href = (index) => {
    const product = shot(index);
    return product ? `/product/${product.id}` : "/all-products";
  };

  return (
    <>
      <Layout>
        {/* {ads && <Ads handler={adsHandle} />} */}
        <div className="btn w-5 h-5 "></div>
        <Banner
          className="banner-wrapper mb-[60px]"
          products={shots}
          initialOffset={bannerSlot()}
        />
        <SectionStyleOne
          products={products}
          brands={brands}
          categoryTitle="brands"
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
          ads={[ad(3), ad(4)]}
          links={[href(3), href(4)]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleOne
          categoryBackground={`/assets/images/section-category-2.jpg`}
          products={products.slice(4, products.length)}
          brands={brands}
          categoryTitle="brands"
          sectionTitle="popularSales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        <ProductsAds
          ads={[ad(5)]}
          links={[href(5)]}
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
          ads={[ad(6)]}
          links={[href(6)]}
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
