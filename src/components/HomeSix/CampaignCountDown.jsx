"use client";
import Link from "next/link";
import CountDown from "../Helpers/CountDown";

export default function CampaignCountDown({ className, lastDate }) {
  const { showDate, showHour, showMinute, showSecound } = CountDown(lastDate);

  return (
    <div>
      <div className={`w-full lg:h-[460px] ${className || ""}`}>
        <div className="container-x mx-auto h-full">
          <div className="items-center h-full">
            <div
              data-aos="fade-right"
              className="campaign-countdown h-full w-full mb-5 lg:mb-0"
              style={{
                background: `url(/assets/images/campaign-cover-countdown-6.png) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <Link href="/flash-sale">
                <div className="w-full xl:p-12 p-5">
                  <div className="countdown-title mb-4">
                    <h1 className="text-xl font-medium text-qh6-orange font-600">
                      60% Off This Week
                    </h1>
                    <p className="text-[40px] leading-[48px] text-white mt-2 font-semibold">
                      This week best deals <br />
                      for summer
                    </p>
                    <p className="text-white text-xl font-semibold mt-10">
                      End Offers
                    </p>
                  </div>
                  <div className="countdown-wrapper w-full flex space-x-[23px] mb-10">
                    <div className="countdown-item">
                      <div className="countdown-number flex-col sm:w-[63px] sm:h-[63px] w-[50px] h-[50px]  bg-white flex justify-center items-center">
                        <span className="font-semibold sm:text-2xl text-[14px] text-qblack leading-none">
                          {showDate}
                        </span>
                        <p className="sm:text-[18px] text-[12px] font-500 text-center leading-none">
                          Days
                        </p>
                      </div>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number flex-col sm:w-[63px] sm:h-[63px] w-[50px] h-[50px]  bg-white flex justify-center items-center">
                        <span className="font-semibold sm:text-2xl text-[14px] text-qblack leading-none">
                          {showHour}
                        </span>
                        <p className="sm:text-[18px] text-[12px] font-500 text-center leading-none">
                          Hours
                        </p>
                      </div>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number flex-col sm:w-[63px] sm:h-[63px] w-[50px] h-[50px]  bg-white flex justify-center items-center">
                        <span className="font-semibold sm:text-2xl text-[14px] text-qblack leading-none">
                          {showMinute}
                        </span>
                        <p className="sm:text-[18px] text-[12px] font-500 text-center leading-none">
                          Min
                        </p>
                      </div>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number flex-col sm:w-[63px] sm:h-[63px] w-[50px] h-[50px]  bg-white flex justify-center items-center">
                        <span className="font-semibold sm:text-2xl text-[14px] text-qblack leading-none">
                          {showSecound}
                        </span>
                        <p className="sm:text-[18px] text-[12px] font-500 text-center leading-none">
                          Sec
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="  w-[119px] h-10">
                    <div className="yellow-btn !bg-qh6-orange !text-white inline-flex space-x-2 items-center">
                      <span className="text-sm font-600 tracking-wide leading-7">
                        Shop Now
                      </span>
                      <span>
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2.08984"
                            y="0.636719"
                            width="6.94219"
                            height="1.54271"
                            transform="rotate(45 2.08984 0.636719)"
                            fill="currentColor"
                          />
                          <rect
                            x="7"
                            y="5.54492"
                            width="6.94219"
                            height="1.54271"
                            transform="rotate(135 7 5.54492)"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
