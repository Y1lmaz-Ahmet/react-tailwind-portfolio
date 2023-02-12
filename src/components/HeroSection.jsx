import React from "react";

const HeroSection = () => {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>
          Hi, ik ben Ahmet Yilmaz
        </h1>
        <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>
          Welkom op mijn portfolio
          <br />
        </p>
        <a
          href='#works'
          className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
		   md:text-md'
        >
          bekijk mijn projecten
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
