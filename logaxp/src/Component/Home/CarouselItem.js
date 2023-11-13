import { useState, useRef} from 'react';
import { Swiper, SwiperSlide } from'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css'

import image1 from '../../assets/images/doc2.png';
import image2 from '../../assets/images/doc4.png';
import image3 from '../../assets/images/fall2.png';
import image4 from '../../assets/images/doc3.png';
import image5 from '../../assets/images/fall.png';
import image6 from '../../assets/images/logaxp.png';

const headers = [
  'The Changing Consumer',
  'Equity & Sustainability',
  'Future of Consumer',
  'Innovation & Technology',
  'Risk & Resiliency',
  'The Evolving Workforce',
];

const contentSections = [
  [
    {
      image: image1,
      title: 'The Changing Consumer',
      description: 'In today\'s rapidly changing world, understanding consumer needs and behaviors is crucial for businesses to remain competitive and thrive.',
    },
    {
      image: image2,
      title: 'Equity & Sustainability',
      description: 'Sustainability is no longer just a buzzword; it\'s a business imperative. Embracing sustainable practices benefits both the environment and your bottom line.',
    },
    {
      image: image3,
      title: 'Future of Consumer',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
    {
      image: image3,
      title: 'Future of Consumer',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
  ],
  [
    {
      image: image4,
      title: 'Innovation & Technology',
      description: 'Innovation is the key to unlocking new opportunities and staying ahead of the competition. Foster a culture of innovation within your organization.',
    },
  
    {
      image: image5,
      title: 'Risk & Resiliency ',
      description: 'In an ever-changing business landscape, risks are inevitable. Develop effective risk management strategies to ensure business continuity.',
    },
  
    {
      image: image6,
      title: 'The Evolving Workforce',
      description: 'The workplace is undergoing a significant transformation. Adapt to the changing workforce dynamics to attract and retain top talent.',
    },
    {
      image: image3,
      title: 'Equity & Sustainability',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
  ],
  [
    {
      image: image1,
      title: 'The Changing  Approach to Work',
      description: 'In today\'s rapidly changing world, understanding consumer needs and behaviors is crucial for businesses to remain competitive and thrive.',
    },
    {
      image: image2,
      title: 'Equity & Features',
      description: 'Sustainability is no longer just a buzzword; it\'s a business imperative. Embracing sustainable practices benefits both the environment and your bottom line.',
    },
    {
      image: image3,
      title: 'Future of consumers',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
    {
      image: image3,
      title: 'Future of Consumer',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
  ], 
  [
    {
      image: image1,
      title: 'The Changing Consumer',
      description: 'In today\'s rapidly changing world, understanding consumer needs and behaviors is crucial for businesses to remain competitive and thrive.',
    },
    {
      image: image2,
      title: 'Equity & Sustainability',
      description: 'Sustainability is no longer just a buzzword; it\'s a business imperative. Embracing sustainable practices benefits both the environment and your bottom line.',
    },
    {
      image: image3,
      title: 'Future of Consumer',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
    {
      image: image3,
      title: 'Future of Consumer',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
  ],
  [
    {
      image: image4,
      title: 'Innovation & Technology',
      description: 'Innovation is the key to unlocking new opportunities and staying ahead of the competition. Foster a culture of innovation within your organization.',
    },
  
    {
      image: image5,
      title: 'Risk & Resiliency ',
      description: 'In an ever-changing business landscape, risks are inevitable. Develop effective risk management strategies to ensure business continuity.',
    },
  
    {
      image: image6,
      title: 'The Evolving Workforce',
      description: 'The workplace is undergoing a significant transformation. Adapt to the changing workforce dynamics to attract and retain top talent.',
    },
    {
      image: image3,
      title: 'Equity & Sustainability',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
  ],
  [
    {
      image: image1,
      title: 'The Changing  Approach to Work',
      description: 'In today\'s rapidly changing world, understanding consumer needs and behaviors is crucial for businesses to remain competitive and thrive.',
    },
    {
      image: image2,
      title: 'Equity & Features',
      description: 'Sustainability is no longer just a buzzword; it\'s a business imperative. Embracing sustainable practices benefits both the environment and your bottom line.',
    },
    {
      image: image3,
      title: 'Future of consumers',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
    {
      image: image3,
      title: 'Future of Consumer',
      description: 'Technology is transforming the way consumers interact with businesses. Stay ahead of the curve by embracing digital innovation.',
    },
  ]
];

const Carousel = () => {
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleHeaderClick = (index) => {
    setSelectedHeaderIndex(index);
  };

  const goNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const goPrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  return (
    <div className="bg-gray-1">
      <div className="container mx-auto px-2 py-2">
        <h2 className="text-2xl font-semibold mb-8 text-custom-dark text-center uppercase">How we transform workforce</h2>

        {/* Headers */}
        <div className="grid grid-cols-3 gap-1 mb-8 max-w-2xl mx-auto">
          {headers.map((header, index) => (
            <button
              className={`px-1 py-1 border text-sm ${
                selectedHeaderIndex === index
                  ? 'bg-green-500 text-white hover:bg-green-6'
                  : 'bg-white text-green-500 text-bold hover:bg-gray-400 hover:text-white'
              }`}
              key={index}
              onClick={() => handleHeaderClick(index)}
            >
              {header}
            </button>
          ))}
        </div>

        <div className=" gap-1 mb-8 max-w-5xl mx-auto">
      
        {/* Custom Navigation Arrows */}
        <div className="relative">
        <button
            onClick={goPrev}
            className="absolute left-0 z-10 -ml-12 text-3xl text-green-500"
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </button>
                  {/* Swiper */}
          <div className="swiper-container w-full ">
            <Swiper
              ref={swiperRef}
              spaceBetween={16}
              slidesPerView={4}
              loop={true}
              className="mySwiper"
            >
            {contentSections[selectedHeaderIndex].map((content, index) => (
              <SwiperSlide key={index} className="flex flex-col">
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col w-full mb-4" style={{ height: '400px' }}> {/* Fixed height for the card */}
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full" style={{ minHeight: '120px', maxHeight: '120px', objectFit: 'cover' }} // Fixed height for the image
                  />
                  <div className="bg-green-800 text-white text-center py-2"> {/* This div will stretch the full width of the card */}
                    <h3 className="font-bold text-sm">{content.title}</h3>
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <p className="text-gray-600 text-md mb-4">{content.description}</p>
                    
                    <button
                      className="text-gray-500 px-3 py-1 rounded text-md font-bold mt-auto flex items-center"
                    >
                      Read more
                      <FontAwesomeIcon icon={faChevronCircleRight} className="ml-2" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}


            </Swiper>
          </div>

          <button
            onClick={goNext}
            className="absolute right-0 top-0 -mr-12 text-3xl text-green-500"
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
