import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w6/12'>
        <SectionTitle>About me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          Lorem pariatur excepteur Lorem minim exercitation nostrud duis ex
          exercitation cillum do. Culpa eiusmod deserunt ut sint esse sit nulla
          fugiat pariatur aliqua aliqua magna ea. Qui exercitation esse
          excepteur ipsum aliqua cillum consectetur labore exercitation amet.
          Est incididunt mollit adipisicing ipsum pariatur sint labore minim
          laboris labore. Incididunt officia aliqua qui quis do mollit duis elit
          eu magna. Nulla in laboris aliqua qui cupidatat commodo Lorem.
        </p>
        <a
          href='mailto:ahmet.79@hotmail.be'
          className='block mt-3 text-md md:text-lg font-serif text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'
        >
          ahmet.79@hotmail.be
        </a>
      </div>

      <img
        src={`https://avatars.githubusercontent.com/u/115113818?v=4`}
        alt='Ahmet Yilmaz"s github avatar'
        className='w-full md:w6/12 rounded-lg object-cover'
      />
    </div>
  );
};

export default About;
