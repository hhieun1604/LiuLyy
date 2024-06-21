import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-poniter flex flex-col items-center bg-while 
    rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>

      <div className='h-[13rem] w-[10rem] '>
        <img className='object-cover object-top w-full h-full' 
        src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/m/o/h/-original-imaggcawtbgvt7wy.jpeg?q=70" alt="" />
      </div>

      <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Em dep lam</h3>
            <p className='mt-2 text-sm text-gray-900'> Neesu ngafy aasy</p>
      </div>


    </div>
  
  )
}

export default HomeSectionCard