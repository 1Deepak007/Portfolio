import React from 'react'
// import Card3D from '../../components/sub_components/Card3D'

const Intro = () => {
  return (
    <div className='h-[80vh] text-white bg-slate-900 flex flex-col items-start justify-center gap-6'>
        <h2>Hi, I am</h2>
        <h1 className='font-bold text-orange-400 text-3xl md:text-6xl'>Deepak Gautam</h1>
        <h2 className='text-3xl md:text-6xl'>I am a Full Stack Developer <span className='animate-pulse'>👨🏻‍💻</span></h2>
        <p className="text-white md:w-2/3 ">
            I am a Full Stack Developer with keen interest in building web applications. Dynamic person who is ready to take new challenges and work in different technologies.
        </p>
        <button className='p-1 rounded-lg md:p-3 md:rounded-none border-2 border-blue-300 text-blue-300 bg-slate-800 hover:bg-black hover:text-white hover:font-semibold'>Get Started</button>
    </div>
  )
}

export default Intro