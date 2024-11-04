import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SideBanners() {
  const [sideBannerList, setSideBannerList] = useState([]);
  useEffect(() => {
    getSideBanners();
  }, []);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      console.log(resp);
      setSideBannerList(resp?.sideBanners);
    });
  };
  return (
    <div className="border-2">
      {sideBannerList.map((item, index) => {
        <div key={index}>
          <Image
            src={item.banner.url}
            width={500}
            height={300}
            alt="banner"
            className="rounded-xl cursor-pointer"
            onClick={() => window.open(item?.url)}
          />
        </div>;
      })}
      <p>hii</p>
    </div>
  );
}

export default SideBanners;
