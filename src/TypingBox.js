import React from 'react';

const TypingBox = ({
  leftPad,
  outgoingChars,
  currentChar,
  incomingChars,
  seconds,
}) => {
  return (
    <section className='text-gray-600 body-font bg-teal-100 h-screen'>
      <div className='container px-5 py-20 mx-auto flex flex-col h-screen'>
        <div className='lg:w-4/6 mx-auto'>
          <div className='rounded-lg h-64 '>
            <div className='w-full px-6'>
              <div className='mt-6 relative rounded-lg bg-teal-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-40 xl:pb-10'>
                <div className='w-11/12 sm:w-2/3 mb-5 sm:mb-10'>
                  <h1 className='sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-yellow-100 font-bold leading-tight'>
                    Typing Practice. Start typing below to begin!
                  </h1>
                </div>
                <div className='flex justify-center items-center mb-10 sm:mb-12'>
                  <div>
                    <h2 className='text-xl text-teal-100 max-w-lg text-center'>
                      Test your typing skills and save your high score. One
                      minute rounds!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row absolute inset-x-0 bottom-1/3'>
            <div className='border-gray-200 flex flex-col border-t mx-auto my-auto text-center mt-4 pt-4 w-3/4'>
              <div className='leading-loose text-lg mb-4 h-60 bg-gray-50 text-4xl text-teal-800 tracking-widest px-2 Character'>
                <span className='Character-out'>
                  {(leftPad + outgoingChars).slice(-20)}
                </span>
                <span className='Character-current'>{currentChar}</span>
                <span>{incomingChars.substr(0, 20)}</span>
                <div className='text-center font-bold mt-12 bg-teal-100 w-1/4 mx-auto'>
                  {seconds}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypingBox;
