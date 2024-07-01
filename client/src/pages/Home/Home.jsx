import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'

const Home = () => {
  return (
    <div>
      <Header />
      {/* <div className='bg-slate-900 px-40'> */}
      <div className='bg-slate-900 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40'>
        <Intro />
        <About />
      </div>
    </div>
  )
}

export default Home