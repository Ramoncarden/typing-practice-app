import React from 'react';

const TypingBox = () => {
  return (
    <section class='text-gray-600 body-font bg-teal-100'>
      <div class='container px-5 py-24 mx-auto flex flex-col'>
        <div class='lg:w-4/6 mx-auto'>
          <div class='rounded-lg h-64 overflow-hidden'>
            <div>
              <div className='w-full px-6'>
                <div className='mt-8 relative rounded-lg bg-teal-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64'>
                  <div className='w-11/12 sm:w-2/3 mb-5 sm:mb-10'>
                    <h1 className='sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-white font-bold leading-tight'>
                      The Freedom to Create the Pages You Want
                    </h1>
                  </div>
                  <div className='flex justify-center items-center mb-10 sm:mb-20'>
                    <div>
                      <button className='hover:text-white hover:bg-transparent hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none  rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm'>
                        Get Started
                      </button>
                      <button className='hover:bg-white hover:text-indigo-600 hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm'>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <div className='container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40'>
                  <div className='relative sm:w-2/3 w-11/12'>
                    <img
                      src='https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png'
                      alt
                      className='absolute'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col sm:flex-row mt-10'>
            <div class='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
              <p class='leading-relaxed text-lg mb-4'>
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90's scenester vexillologist
                forage post-ironic asymmetrical, chartreuse disrupt butcher
                paleo intelligentsia pabst before they sold out four loko. 3
                wolf moon brooklyn.
              </p>
              <a class='text-indigo-500 inline-flex items-center'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypingBox;
