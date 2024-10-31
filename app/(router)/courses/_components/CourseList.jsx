import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";

function CourseList() {
  // fetch courses list
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      console.log(resp);
      setCourseList(resp?.courseLists);
    });
  };
  return (
    <div className="p-5 bg-white rounded-lg m-5">
      {/* title and filter */}
      <div className="flex  items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">all courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* display course List */}
      <div className="">
        {courseList.map((item, index) => (
          <div key={index} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <CourseItem course={item} />
            {/* <CourseItem course={item} /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
