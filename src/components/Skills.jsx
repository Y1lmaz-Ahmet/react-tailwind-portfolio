import React from "react";
import SectionTitle from "./SectionTitle";
import skills from "../data/skills";
const About = () => {
  return (
    <div className='flex items-center justify-center gap-10 md:gap-20 py-20 '>
      <div className='w-full md:w6/12'>
        <SectionTitle>Skills</SectionTitle>
        <div className='gap-4 justify-center'>
          <div className='text-white  rounded-md gap-6   bg-slate-300   dark:bg-slate-800 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {skills.map((item, index) => (
              <div className=' justify-center flex' key={item.title}>
                <img
                  src={item.img}
                  key={item.title}
                  className='hover:bg-slate-500 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transition transform
	 rounded-md p-5 hover:cursor-pointer'
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
