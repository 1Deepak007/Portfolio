import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import projects from '../../resources/projects';
import Timeline from '../../components/sub_components/Timeline';
import Card from '../../components/sub_components/Card';
import { Link } from 'react-router-dom';



const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <>
      <div className='mb-2'>
        <SectionTitle title="Projects" />
      </div>


      <div>
        <div className="flex py-2 md:gap-20 sm:flex-col">
          <div className="flex flex-col gap-4 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow--scroll sm:w-full">
            {projects.map((project, index) => (
              <div key={index} onClick={() => setSelectedItemIndex(index)} className='cursor-pointer'>
                <h1 className={`text-xs mx-4 md:text-xl md:px-5
                  ${selectedItemIndex === index
                    ? 'text-[#32aada] border-blue-900 border-l-4 -ml-[3px] bg-[#1a7f5a31] py-2'
                    : 'text-[#9999]'}
                  `}
                >
                  {project.projectname}
                </h1>
              </div>
            ))}
          </div>
          <div className="item-center justify-center gap-10 sm:flex-col">
            <div className="md:flex">
              <div className="">
                <img src={projects[selectedItemIndex].image} alt="" className='h-20 md:h-32 ' />
              </div>
              <div className="md:ms-5 mt-6 md:mt-0">
                <h5 className="md:mb-3 text-sm md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{projects[selectedItemIndex].projectname}</h5>
                <p className=''>
                  <Link to={projects[selectedItemIndex].projectlink} className="break-words sm:break-normal text-xs md:text-sm text-blue-500 hover:cursor-pointer">
                    Visit Github
                  </Link>
                </p>
                <p className="mb-3 text-xs md:text-base font-normal text-gray-700 dark:text-gray-400">{projects[selectedItemIndex].description}</p>

              </div>
            </div>
            <div className="flex flex-col gap-5">
            </div>
          </div>
        </div>
      </div>


      {/* <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 text-s md:gap-8 me-8 w-1/2 sm:w-full">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedItemIndex(index)} className='cursor-pointer'>
              <h1 className={`text-xs mx-2 md:text-xl md:px-5
                ${selectedItemIndex === index
                  ? 'text-[#32aada] border-blue-900 border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3'
                  : 'text-[#9999]'}
                `}
              >
                {project.projectname}
              </h1>
            </div>
          ))}
        </div>

        <div className="col-span-2 ... bg-slate-800 rounded-xl max-w-xl ms-6 border-2">
            <img className="object-cover w-2/3 rounded-t-lg md:96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg p-3" src={projects[selectedItemIndex].image} alt="project images" />
          <div className="w-full justify-between p-4 leading-normal">
            <h5 className="mb-2 text-sm md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{projects[selectedItemIndex].projectname}</h5>
            <p className=''>
              <Link to={projects[selectedItemIndex].projectlink} className="break-words sm:break-normal text-xs md:text-sm text-blue-500 hover:cursor-pointer">
                Visit Github
              </Link>
            </p>
            <p className="mb-3 text-xs md:text-xl font-normal text-gray-700 dark:text-gray-400">{projects[selectedItemIndex].description}</p>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default Projects;





