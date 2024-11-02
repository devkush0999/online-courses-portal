import Image from "next/image";
import React from "react";

function CourseItem({ course }) {
  return (
    <div className="border rounded-lg justify-items-center p-3 m-2 hover:shadow-lg hover:border-green-500">
      <Image
        // src='/next.svg'
        src={course?.banner?.url}
        width={120}
        height={150}
        alt="banner"
        className="rounded-t-xl"
      />
      <div className="text-start">
        <h2 className="font-medium">{course.name}</h2>
        <h2 className="text-[12px] text-gray-500">{course.author}</h2>
        {course?.chapter?.length == 0 ? (
          <div className="flex gap-2">
            <Image
              src="/youtube.png"
              width={20}
              height={20}
              alt="youtube icon"
            />
            <h2 className="text-[14px] text-gray-500">Watch On Youtube</h2>
          </div>
        ) : (
          <div className="flex gap-2 ">
            <Image
              src="/chapter.png"
              width={20}
              height={20}
              alt="chapter icon"
            />
            <h2 className="text-[14px] text-gray-500">Watch </h2>
          </div>
        )}

        <h2>{course?.free ? "Free" : "Paid"}</h2>
      </div>
    </div>
  );
}

export default CourseItem;
