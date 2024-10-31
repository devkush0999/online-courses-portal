import Image from "next/image";
import React from "react";

function CourseItem({ course }) {
  return (
    <div>
      <Image
        // src='/next.svg'
        src={course?.banner?.url}
        width={100}
        height={150}
        alt="banner"
        className="rounded-t-xl"
      />
    </div>
  );
}

export default CourseItem;
