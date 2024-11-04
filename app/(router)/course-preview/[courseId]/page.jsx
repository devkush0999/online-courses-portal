"use client";
// import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function CoursePreview(params) {
  // const path = usePathname();
  useEffect(() => {
    console.log(params);
  }, []);

  return <div>page</div>;
}

export default CoursePreview;
