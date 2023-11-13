import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/images/pagenotfound.png';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: `url(${NotFoundImage})` }}>
      <div className=" p-12 md:p-24 rounded-lg shadow-2xl text-center backdrop-blur-sm">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-6">
          404
        </h1>
        <h3 className="text-3xl md:text-7xl font-extrabold  mb-8 text-green-700">
          Oops! The page you're looking for isn't here.
        </h3>
        <p className="text-lg text-green-500  mb-8">
          You might have the wrong address, or the page may have moved.
        </p>
        <Link to="/" className="inline-block bg-red-600 text-white text-lg md:text-xl font-bold px-8 py-4 rounded-lg transform hover:scale-105 hover:bg-red-700 transition ease-in-out duration-300">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
