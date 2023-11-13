import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/images/pagenotfound.png';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundImage: `url(${NotFoundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-black bg-opacity-75 p-24 rounded-lg shadow-xl text-center" style={{ backdropFilter: 'blur(5px)' }}>
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h3 className="text-xl text-white mb-6">Oops! The page you're looking for isn't here.</h3>
        <p className="mb-8 text-white">You might have the wrong address, or the page may have moved.</p>
        <Link to="/" className="inline-block bg-red-600 text-white text-md font-bold px-6 py-3 rounded hover:bg-indigo-700 transition-colors duration-200">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
