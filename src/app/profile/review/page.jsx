import ReviewTab from "@/components/Auth/Profile/tabs/ReviewTab";
import React from "react";
import datas from "@/data/products";
function page() {
  return <ReviewTab products={datas.products} />;
}

export default page;
