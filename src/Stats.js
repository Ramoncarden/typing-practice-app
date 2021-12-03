import React from 'react';

const paragraphStyle = 'text-3xl text-teal-800 font-bold tracking-wide mx-12';
const buttonStyles =
  'hover:text-yellow-100 hover:bg-teal-800 hover:border-white border text-white bg-teal-600 transition duration-150 ease-in-out focus:outline-none  rounded px-4 sm:px-8 py-1 sm:py-3 text-md';

const Stats = ({ wpm, accuracy, resetAll }) => {
  return (
    <div className='flex'>
      <div className='mx-auto text-center absolute inset-x-0 bottom-1/4 mt-2 flex justify-center items-center'>
        <p className={paragraphStyle}>
          Wpm: <u>{wpm}</u>
        </p>
        <p className={paragraphStyle}>
          accuracy: <u>{accuracy}%</u>
        </p>
      </div>
      <div className='absolute bottom-52 flex inset-x-0 justify-center items-center'>
        <button onClick={resetAll} className={buttonStyles}>
          Start Over
        </button>
        <span className='text-3xl mx-10'>Or</span>
        <button className={buttonStyles}>Save Stats</button>
      </div>
    </div>
  );
};

export default Stats;
