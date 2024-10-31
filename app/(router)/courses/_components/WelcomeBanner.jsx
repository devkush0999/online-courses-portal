import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/next.svg" alt="jii" width={150} height={120} />
      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-primary">Devesh kumar singh</span>
        </h2>
        <h2 className="text-gray-500">
          Explore, Learn and Build All Real Life Projects
        </h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
