import React from 'react';

export default function Educationpage() {
  return (
    <div className="bg-indigo-200 pt-5 flex flex-col items-center rounded-lg shadow-md py-12 px-6 sm:px-12 lg:px-44 text-center p-4 m-8">
      <h1 className='text-indigo-900 py-5 text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-center drop-shadow-md'>
        Education
      </h1>
      <p className='text-center p-5 m-4 max-w-3xl from-neutral-300 font-serif text-lg sm:text-xl'>
        I am currently pursuing an IT course at GIAIC, enhancing my skills for a career as a full-stack developer. 
        I hold a bachelors degree from Govt Karachi University and completed my intermediate studies at S.M.B Fatimah Jinnah College. 
        My educational journey began with my matriculation from GOVT Girls School, providing me with a solid foundation in technology.
      </p>

      <ul className='text-center text-lg sm:text-xl font-semibold'>
        <li>
          <span className='text-2xl font-semibold text-indigo-700'>GIAIC</span><br />
          IT Course (Continue)
        </li>
        <br />
        <li>
          <span className='text-2xl font-semibold text-indigo-700'>Karachi University</span><br />
          Bachelors Degree (2019-2021)
        </li>
        <br />
        <li>
          <span className='text-2xl font-semibold text-indigo-700'>S.M.B Fatima Jinnah Govt Girls College</span><br />
          Intermediate Studies in Arts (2017-2019)
        </li>
        <br />
        <li>
          <span className='text-2xl font-semibold text-indigo-700'>Govt Ibrahim Ali Girl School</span><br />
          Matriculation in Arts (2015-2017)
        </li>
      </ul>
    </div>
  );
}
