import React from 'react'

const Intro = () => {
  return (
    <div className='h-[80vh] text-white bg-slate-900 flex flex-col items-start justify-center gap-6'>
        <h2>Hi, I am</h2>
        <h1 className='text-xl font-bold text-orange-400 md:text-6xl'>Deepak Gautam</h1>
        <h2 className=' md:text-6xl'>I am a Full Stack Developer <span className='text-4xl'>👨🏻‍💻</span></h2>
        <p className="text-white w-2/3">
            I am a Full Stack Developer with keen interest in building web applications. Dynamic person who is ready to take new challenges and work in different technologies.
        </p>
        <button className='p-3 border-2 border-blue-300 text-blue-300 bg-slate-800 hover:bg-black hover:text-white hover:font-semibold'>Get Started</button>
    </div>
  )
}

export default Intro