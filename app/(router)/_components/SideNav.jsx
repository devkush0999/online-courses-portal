"use client";
import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: "/newsletter",
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: "/newsletter",
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
      path: "/newsletter",
    },
    {
      id: 4,
      name: "My Profile",
      icon: BadgeIcon,
      path: "/newsletter",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    console.log("path", path);

    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image
        alt="logo"
        src="/youtube.png"
        width={150}
        height={100}
        className="rounded-lg"
      />
      <hr className="mt-7"></hr>
      {/* =========================================== Menu List ==================================================== */}
      <h2 className="text-2xl font-bold mt-5">Learnify</h2>
      <div className="mt-8">
        {menu.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-blue-500 cursor-pointer
                     hover:bg-purple-700 rounded-full hover:text-white transition-all ease-in-out duration-200 ${
                       path.includes(item.path) && "bg-primary text-white"
                     }`}
            >
              <item.icon className="group-hover:animate-bounce" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
