import React from 'react';
import { useSelector } from 'react-redux';

const Intro = () => {
  const { portfolioData } = useSelector((state) => state.root);

  if (!portfolioData || !portfolioData.intro) {
    return null;
  }

  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  return (
    <div className="h-[80vh] text-white bg-slate-900 flex flex-col items-start justify-center gap-6">
      <h2>{welcomeText || ''}</h2>
      <h1 className="font-bold text-orange-400 text-3xl md:text-6xl">{firstName || ''} {lastName || ''}</h1>
      <h2 className="text-3xl md:text-6xl">{caption || ''} <span className="animate-pulse">👨🏻‍💻</span></h2>
      <p className="text-white md:w-2/3">
        {description || ''}
      </p>
      <button className="p-1 rounded-lg md:p-3 md:rounded-none border-2 border-blue-300 text-blue-300 bg-slate-800 hover:bg-black hover:text-white hover:font-semibold">Get Started</button>
    </div>
  );
};

export default Intro;
