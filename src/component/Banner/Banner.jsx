import React from 'react';
import Lottie from 'lottie-react';
import all from '../../../public/all.json';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="hero  bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] h-96 lg:h-72 rounded-lg p-2">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">
            Unlock Infinite Possibilities: Explore All Your Queries Here!
          </h1>
          <Lottie animationData={all} className="h-32" />
          <Link
            to="/allQueries"
            className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-blue-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">Queries</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
