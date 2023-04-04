import React from 'react';


export default function Promotion() {
  return (
    <div className=' m-pri-marginTop'>
      <h2 className='text-3xl text-center'>Deals Of The Month</h2>
      <p className='text-lg text-center py-2 mb-10'>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p>
      <div className='grid grid-cols-2'>
        {/* Promotion Iteam 1 */}
        <div className='grid grid-cols-2 aspect-[7/3] border-solid border-2 m-pri-marginX'>
          <div>
            <img className='w-[90%] h-[90%] mx-auto my-auto object-cover' src='https://hthaostudio.com/wp-content/uploads/2019/08/Anh-guitar-18.jpg'></img>
          </div>
          <div className='flex flex-col my-5 justify-between'>
            <a>Music instrument name</a>
            <div className='text-sm'>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            </div>
            <div className='text-lg'>
              <span className='font-medium'>3.000.000</span>
              <span className='ml-5 font-medium text-sm text-gray-500 line-through'>4.000.000</span>
            </div>
            <p><strong className='text-red-600'>Hurry up!</strong> Ofter ends in</p>
            <div className='flex items-center'>
              <div className='flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg'>
                <span className='leading-4'>00</span>
                <span className='leading-4'>Days</span>
              </div>
              <div className='flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg'>
                <span className='leading-4'>00</span>
                <span className='leading-4'>Hours</span>
              </div>
              <div className='flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg'>
                <span className='leading-4'>00</span>
                <span className='leading-4'>Mins</span>
              </div>
              <div className='flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg'>
                <span className='leading-4'>00</span>
                <span className='leading-4'>Secs</span>
              </div>
            </div>
          </div>
        </div>

         {/* Promotion Iteam 2*/}
         <div className='grid grid-cols-2 aspect-[7/3] border-solid border-2 m-pri-marginX'>
          <div>
            <img className='w-[90%] h-[90%] mx-auto my-auto object-cover' src='https://hthaostudio.com/wp-content/uploads/2019/08/Anh-guitar-18.jpg'></img>
          </div>
          <div className='flex flex-col my-5 justify-between'>
            <a>Music instrument name</a>
            <div className='text-sm'>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            </div>
            <div className='text-lg'>
              <span className='font-medium'>3.000.000</span>
              <span className='ml-5 font-medium text-gray-500 line-through'>4.000.000</span>
            </div>
            <p><strong className='text-red-600'>Hurry up!</strong> Ofter ends in</p>
            <div className='flex items-center'>
              <div className='flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg'>
                <span className='leading-4'>00</span>
                <span className='leading-4'>Days</span>
              </div>
              <div className='flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg'>
                <span className='leading-4'>00</span>
                <span className='leading-4'>Hours</span>
              </div>
              <div className='flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg'>
                <span className='leading-4'>00</span>
                <span className='leading-4'>Mins</span>
              </div>
              <div className='flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg'>
                <span className='leading-4'>00</span>
                <span className='leading-4'>Secs</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}