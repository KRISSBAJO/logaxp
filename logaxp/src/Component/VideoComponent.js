import React, { useState, useEffect } from 'react';

import './VideoComponent.css';
import { ReactComponent as PlayIcon } from '../assets/images/play.svg';
import { ReactComponent as PauseIcon } from '../assets/images/pause.svg';
import loga from '../assets/videos/loga.mp4';


const content = [
    {
      header: 'We Thrive in HR Applications',
      body: 'Elevate your business with our expertise in HR applications. We are dedicated to innovation, efficiency, and seamless solutions that empower your workforce.',
    },
    {
      header: 'Leading in IT Services',
      body: 'Advance your technical infrastructure with our cutting-edge IT services. Our solutions are crafted to boost productivity and foster growth in your business operations.',
    },
    {
      header: 'Utility Apps at Their Best',
      body: 'Discover the potential of utility apps with our comprehensive suite. Designed for versatility and user-friendliness, our apps streamline your daily tasks and processes.',
    },
  ];
  

  const VideoComponent = () => {
    const [isVideoPlaying, setVideoPlaying] = useState(true);
    const videoRef = useState(null);
  
    const handlePlayButtonClick = () => {
      if (videoRef.current) {
        if (isVideoPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setVideoPlaying(!isVideoPlaying);
      }
    };
  
    const [contentIndex, setContentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setContentIndex((prevIndex) => (prevIndex + 1) % content.length);
      }, 5000); // Change content every 5 seconds
  
      return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);
  
    return (
      <div className="video-component mb-10">
        <div className="video-container">
          <video
            ref={videoRef}
            src={loga}
            width="680"
            height="390"
            muted
            loop
            autoPlay
            onClick={handlePlayButtonClick}
          />
          <button className="play-button" onClick={handlePlayButtonClick}>
            {isVideoPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
        <div className="text-container">
          <h1 className="content-header">{content[contentIndex].header}</h1>
          <p className="content-body">{content[contentIndex].body}</p>
          <button className="connect-button">Connect with Us</button>
        </div>
      </div>
    );
  };
  
  export default VideoComponent;
