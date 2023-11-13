import React from 'react';
import image1 from '../../assets/images/fall2.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faNetworkWired, faTools, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BackgroundWithCards = () => {
  const cardStyle = {
    width: '300px',
    minHeight: '350px',
    backgroundColor: 'rgba(204, 202, 219, 0.80)',
  };

  return (
    <div className="relative mt-20 mb-20 p-10">
      {/* Background Image */}
      <img src={image1} alt="Background" className="w-full h-128 object-cover" />

      {/* Cards Container */}

      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 gap-4 flex justify-center items-start">
        
        {/* Card 1 - HR */}
        <Link to="/hr-services" className="focus:outline-none">
          <div
            className="rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-2"
            style={cardStyle}
          >
            <FontAwesomeIcon icon={faBookOpen} size="3x" className="text-green-500 mb-4" />
            <h2 className="font-bold text-xl mb-4">HR Services</h2>
            <hr className="mb-4 border-green-500" />
            <p className="text-base text-gray-900 mb-8">
              Offering comprehensive human resource solutions tailored for your
              company's needs.
            </p>
            <span className="text-gray-700 font-bold flex items-center">
              Read More <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </span>
          </div>
        </Link>

        {/* Card 2 - IT */}
        <Link to="/it-solutions" className="focus:outline-none">
          <div
            className="rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-2"
            style={cardStyle}
          >
            <FontAwesomeIcon icon={faNetworkWired} size="3x" className="text-green-500 mb-4" />
            <h2 className="font-bold text-xl mb-4">IT Solutions</h2>
            <hr className="mb-4 border-green-500" />
            <p className="text-base text-gray-900 mb-8">
              Advanced IT solutions to optimize your business operations and drive
              digital transformation.
            </p>
            <span className="text-gray-700 font-bold flex items-center">
              Read More <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </span>
          </div>
        </Link>

        {/* Card 3 - Ogn Utility Service */}
        <Link to="/ogn-utility-services" className="focus:outline-none">
          <div
            className="rounded-lg shadow-xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:-translate-y-2"
            style={cardStyle}
          >
            <FontAwesomeIcon icon={faTools} size="3x" className="text-white mb-4" />
            <h2 className="font-bold text-xl mb-4">Ogn Utility Service</h2>
            <hr className="mb-4 border-white" />
            <p className="text-base text-gray-900 mb-8">
              Reliable and efficient utility services to ensure uninterrupted
              operations of your essential systems.
            </p>
            <span className="text-gray-700 font-bold flex items-center">
              Read More <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </span>
          </div>
        </Link>
      </div>
        </div>
    );
};

export default BackgroundWithCards;
