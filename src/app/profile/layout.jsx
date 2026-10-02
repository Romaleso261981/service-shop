// import AddressesTab from "./tabs/AddressesTab";
// import Dashboard from "./tabs/Dashboard";
// import OrderTab from "./tabs/OrderTab";
// import PasswordTab from "./tabs/PasswordTab";
// import Payment from "./tabs/Payment";
// import ProfileTab from "./tabs/ProfileTab";
// import ReviewTab from "./tabs/ReviewTab";
// import SupportTab from "./tabs/SupportTab";
// import WishlistTab from "./tabs/WishlistTab";
import BreadcrumbCom from "@/components/BreadcrumbCom";
import Layout from "@/components/Partials/Layout";
import IcoDashboard from "@/components/Auth/Profile/icons/IcoDashboard";
import IcoPeople from "@/components/Auth/Profile/icons/IcoPeople";
import IcoPayment from "@/components/Auth/Profile/icons/IcoPayment";
import IcoCart from "@/components/Auth/Profile/icons/IcoCart";
import IcoLove from "@/components/Auth/Profile/icons/IcoLove";
import IcoAdress from "@/components/Auth/Profile/icons/IcoAdress";
import IcoReviewHand from "@/components/Auth/Profile/icons/IcoReviewHand";
import IcoPassword from "@/components/Auth/Profile/icons/IcoPassword";
import IcoSupport from "@/components/Auth/Profile/icons/IcoSupport";
import IcoLogout from "@/components/Auth/Profile/icons/IcoLogout";
import Link from "next/link";
import ToggleBtn from "@/components/Helpers/ToggleBtn";

export default function Profile({ children }) {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="profile-page-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="w-full my-10">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "profile", path: "/profile" },
              ]}
            />
            <div className="w-full bg-white px-10 py-9">
              <div className="title-area w-full flex justify-between items-center">
                <h1 className="text-[22px] font-bold text-qblack">
                  Your Dashboard
                </h1>
                <div className="switch-dashboard flex space-x-3 items-center">
                  <p className="text-qgray text-base">Switch Dashboard</p>
                  <ToggleBtn />
                </div>
              </div>
              <div className="profile-wrapper w-full mt-8 flex space-x-10">
                <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
                  <div className="flex flex-col space-y-10">
                    <div className="item group">
                      <Link href={"/profile"}>
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoDashboard />
                          </span>
                          <span className=" font-normal text-base">
                            Dashbaord
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="item group">
                      <Link href="/profile/profile">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoPeople />
                          </span>
                          <span className=" font-normal text-base">
                            Parsonal Info
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="item group">
                      <Link href="/profile/payment">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoPayment />
                          </span>
                          <span className=" font-normal text-base">
                            Payment Method
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="item group">
                      <Link href="/profile/order">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoCart />
                          </span>
                          <span className=" font-normal text-base">Order</span>
                        </div>
                      </Link>
                    </div>
                    <div className="item group">
                      <Link href="/profile/wishlist">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoLove />
                          </span>
                          <span className=" font-normal text-base">
                            Wishlist
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="item group">
                      <Link href="/profile/address">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoAdress />
                          </span>
                          <span className=" font-normal text-base">
                            Address
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="item group">
                      <Link href="/profile/review">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoReviewHand />
                          </span>
                          <span className=" font-normal text-base">
                            Reviews
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="item group">
                      <Link href="/profile/password">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoPassword />
                          </span>
                          <span className=" font-normal text-base">
                            Change Password
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="item group">
                      <Link href="/profile/support">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoSupport />
                          </span>
                          <span className=" font-normal text-base">
                            Support Ticket
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="item group">
                      <Link href="/">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoLogout />
                          </span>
                          <span className=" font-normal text-base">
                            Logoout
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="item-body dashboard-wrapper w-full">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
