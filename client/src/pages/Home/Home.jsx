import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <div className='bg-slate-900 px-40'> */}
      <div className='bg-slate-900 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 pb-0'>
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <div className='ps-8 invisible md:visible'>
        <Sidebar />
      </div>
    </>
  )
}

export default Home
