import React from 'react';
import '../../App.css';
import Feature from '../Feature';
import Carousel from './CarouselItem';
import BackgroundWithCards from './BackgroundWithCards';
import JoinUs from './JoinUs';
import VideoComponent from '../VideoComponent';
import Products from './Products';

import './Main.js';

function Home({ showJoinModal, toggleJoinModal }) {
  
  return (
    <>
      <div className="home-content  py-12 px-6 lg:px-24">
  
        <Products />
        <VideoComponent />
        <Feature className="mb-10" />
        {/* Conditionally render JoinUs as a modal */}
        {showJoinModal && (
          <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-2  bg- w-full max-w-sm m-auto flex-col flex rounded-lg ">
              <button 
                onClick={toggleJoinModal} 
                className="absolute top-0 right-0 p-14 z-10 text-white font-extrabold"
                aria-label="Close"
              >
                X
              </button>
              <JoinUs />
            </div>
          </div>
        )}
        <Carousel />
      </div>
      <BackgroundWithCards />
    </>
  );
}

export default Home;
