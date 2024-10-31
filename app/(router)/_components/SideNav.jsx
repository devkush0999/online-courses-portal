import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
    {
      id: 4,
      name: "My Profile",
      icon: BadgeIcon,
    },
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
    {
      id: 4,
      name: "My Profile",
      icon: BadgeIcon,
    },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <img
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/young-man-walking-in-conrete-underground-walkway.jpg?w=2210&quality=70"
        width={140}
        height={130}
        className="rounded-full"
      />
      <hr className="mt-7"></hr>
      {/* =========================================== Menu List ==================================================== */}
      <h2 className="text-2xl font-bold mt-5">Learnify</h2>
      <div className="mt-8">
        {menu.map((item, index) => (
          <div
            key={index}
            className="group flex gap-3 mt-2 p-3 text-[20px] item-center text-blue-500 cursor-pointer
                     hover:bg-purple-700 rounded-full hover:text-white transition-all ease-in-out duration-200"
          >
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
