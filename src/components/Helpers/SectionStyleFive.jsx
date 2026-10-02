import ProductCardStyleFive from "./Cards/ProductCardStyleFive";
import DataIteration from "./DataIteration";
import ViewMoreTitle from "./ViewMoreTitle";

export default function SectionStyleFive({
  className,
  sectionTitle,
  seeMoreUrl,
  products = [],
  type,
}) {
  return (
    <div className={`section-style-one ${className || ""}`}>
      <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
        <div className="products-section w-full">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
            {products.map((product) => (
              <div key={product.id} data-aos="fade-up" className="item">
                <ProductCardStyleFive type={type} datas={product} />
              </div>
            ))}
          </div>
        </div>
      </ViewMoreTitle>
    </div>
  );
}
