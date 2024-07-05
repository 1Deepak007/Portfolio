import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Timeline = ({ projectname, projectdate, description, projectlink }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleMouseEnter = () => {
        setShowDetails(true);
    };

    const handleMouseLeave = () => {
        setShowDetails(false);
    };

    const handleClick = () => {
        setShowDetails(prevState => !prevState);
    };

    return (
        <>
        <div className="relative mt-4 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="">
                <ol className="items-center sm:flex">
                    <li className="relative mb-6 sm:mb-0 md:w-1/3">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div className="w-full sm:flex bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3
                                className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer"
                                onClick={handleClick}
                            >
                                {projectname}
                            </h3>
                            {/* <time className="flex-row mb-2 text-sm font-normal leading-none dark:text-gray-500">
                                <p>{description}</p>
                                <span>
                                    <Link to={projectlink} className="text-blue-400">CheckOut</Link>
                                </span>
                            </time> */}
                        </div>
                    </li>
                </ol>
            </div>
            <div className='text-wrap'>
                {showDetails && (
                    <div className="md:absolute md:-translate-y-20 top-0  right-0 md:w-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg opacity-90 transition-opacity duration-300 ease-in-out">
                        <h3 className="text-lg font-semibold">{projectname}</h3>
                        <time className="block mb-2 text-sm font-normal text-gray-400">{projectdate}</time>
                        <p className="text-base font-normal">{description}</p>
                        <Link to={projectlink} className="block mb-2 text-sm break-words mt-2.5 font-normal text-blue-400">{projectlink}</Link>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default Timeline;
