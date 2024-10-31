"use client";
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

export default function Courses() {
  return (
    <div className="border grid grid-cols-1 md:grid-cols-4 p-5 ">
      {/* left  section */}
      <div className=" border-[2px] rounded-xl border-black col-span-3 ">
        <WelcomeBanner />

        {/*  Course List  */}
        <CourseList/>
        






        {/* <img src='https://i0.wp.com/picjumbo.com/wp-content/uploads/gorgeous-flamingo-free-image.jpeg?w=1024&quality=50'  alt="kii" width={150} height={150} className='rounded-full'/> */}
      </div>
      {/* right section */}
      <div  className="border-2 rounded-full border-black col-span-1">
        <h2 className='text-center m-10'>Course 1</h2>
      </div>

    </div>
  )
}
