import Link from "next/link";

export default function Showcase({ className }) {
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className=" mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex gap-5   mb-[30px]">
              <div
                data-aos="fade-left"
                className="flex-1 flex xl:flex-col flex-row  xl:gap-5 h-full"
              >
                <div className="w-full xl:h-1/2">
                  <Link href="/single-product">
                    <img
                      src={`/assets/images/h7-s1.png`}
                      alt=""
                      className="w-full h-full"
                    />
                  </Link>
                </div>
                <div className="w-full xl:h-1/2">
                  <Link href="/single-product">
                    <img
                      src={`/assets/images/h7-s2.png`}
                      alt=""
                      className="w-full h-full"
                    />
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="xl:w-[633px] w-full aspect-[633/680]  overflow-hidden"
              >
                <Link href="/single-product">
                  <img
                    src={`/assets/images/h7-s3.png`}
                    alt=""
                    className="w-full max-w-full h-auto object-cover"
                  />
                </Link>
              </div>
              <div
                data-aos="fade-left"
                className="flex-1 flex xl:flex-col flex-row  xl:gap-5 h-full"
              >
                <div className="w-full xl:h-1/2">
                  <Link href="/single-product">
                    <img
                      src={`/assets/images/h7-s4.png`}
                      alt=""
                      className="w-full h-full"
                    />
                  </Link>
                </div>
                <div className="w-full xl:h-1/2">
                  <Link href="/single-product">
                    <img
                      src={`/assets/images/h7-s5.png`}
                      alt=""
                      className="w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
