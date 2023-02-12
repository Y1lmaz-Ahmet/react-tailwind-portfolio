import React from "react";

const Footer = () => {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
      <a
        href='#hero'
        className='block text-xl md:text-2xl font-semibold'
        title='scroll back up'
      >
        Ahmet Yilmaz
      </a>
      <a
        href='mailto:ahmet.79@hotmail.be'
        className='font-serif text-sm md:text-md hover:text-indigo-500 mt-2 text-gray-500 underline'
      >
        ahmet.79@hotmail.be
      </a>
      <p>© Ahmet Yilmaz {new Date().getFullYear()}. All rights reserved</p>
    </div>
  );
};

export default Footer;
