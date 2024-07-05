import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-slate-900'>
      <div className="flex gap-5 text-3xl">
        <h1 className='text-orange-400 l'>L</h1>
        <h1 className='text-white o'>O</h1>
        <h1 className='text-blue-300 a'>A</h1>
        <h1 className='text-lime-400 d'>D</h1>
        <h1 className='text-green-800 i'>I</h1>
        <h1 className='text-yellow-300 n'>N</h1>
        <h1 className='text-black g'>G</h1>
        <h1 className='text-black n'>.</h1>
        <h1 className='text-black i'>.</h1>
        <h1 className='text-black d'>.</h1>
      </div>
    </div>
  );
};

export default Loader;
