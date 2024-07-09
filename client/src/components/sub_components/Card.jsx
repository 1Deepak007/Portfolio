import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, image, period, about, link }) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow p-3 md:p-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-0 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to={link}>
                  <img className="h-20 w-20 rounded-full hover:scale-125 hover:animate-bounce md:hover:rounded-5xl" src={image} alt={`${name} image`} />
                </Link>
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                  {name}
                </p>
                <p className="text-sm text-gray-500 text-wrap truncate dark:text-gray-400">
                  {about}
                </p>
                <p className="text-sm text-gray-500 text-wrap truncate dark:text-gray-400">
                  {[period]}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
