import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex'>
      {/* <h1 className='text-2xl md:text-3xl text-green-400 font-semibold py-10 underline underline-offset-8 '>{title} </h1> */}
      <h1 className='text-green-400 md:text-3xl text-2xl mt-10 underline underline-offset-8'>{title} </h1>
      <div className='w-40 h-[1px] text-blue-300'>
        
      </div>
    </div>
  )
}

export default SectionTitle
