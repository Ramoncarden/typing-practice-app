import React, { useState, useEffect } from 'react';

const Table = ({ clearLocalStorage, wpm, accuracy, saveStats }) => {
  let [tableDate, setDate] = useState(JSON.parse(localStorage.getItem('date')));

  let [tableWpm, setTableWpm] = useState(
    JSON.parse(localStorage.getItem('WPM'))
  );
  let [tableAccuracy, setTableAccuracy] = useState(
    JSON.parse(localStorage.getItem('Accuracy'))
  );

  useEffect(() => {
    function checkLocalStorage() {
      const item1 = localStorage.getItem('WPM');
      const item2 = localStorage.getItem('Accuracy');
      if (item1) {
        setTableWpm(item1);
      } else if (item2) {
        setTableAccuracy(item2);
      }
    }
    window.addEventListener('storage', checkLocalStorage);

    return () => {
      window.removeEventListener('storage', checkLocalStorage);
    };
  }, [tableWpm, tableAccuracy]);

  return (
    <div className='bg-teal-100 pb-10'>
      <table className='max-w-5xl mx-auto table-auto'>
        <thead className='justify-between'>
          <tr className='bg-green-600'>
            <th className='px-16 py-2'>
              <span className='text-gray-100 font-semibold'>Date</span>
            </th>

            <th className='px-16 py-2'>
              <span className='text-gray-100 font-semibold'>WPM</span>
            </th>

            <th className='px-16 py-2'>
              <span className='text-gray-100 font-semibold'>Accuracy</span>
            </th>

            <th className='px-16 py-2'>
              <span className='text-gray-100 font-semibold'>Remove</span>
            </th>
          </tr>
        </thead>
        <tbody className='bg-gray-200'>
          <tr className='bg-white border-b-2 border-gray-200'>
            <td>
              <span className='text-center ml-2 font-semibold'>
                {tableDate}
              </span>
            </td>

            <td className='px-16 py-2'>
              <span>{saveStats ? wpm : tableWpm}</span>
            </td>
            <td className='px-16 py-2'>
              <span>{saveStats ? accuracy : tableAccuracy}%</span>
            </td>

            <td className='px-16 py-2'>
              <span className='text-yellow-500 flex'>
                <button onClick={clearLocalStorage}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-red-700'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
