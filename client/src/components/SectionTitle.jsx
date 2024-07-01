import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex'>
      <h1 className='text-3xl text-blue-50 font-semibold py-10 '>{title}</h1>
      <div className='w-40 h-[1px] text-blue-300'>
        
      </div>
    </div>
  )
}

export default SectionTitle
