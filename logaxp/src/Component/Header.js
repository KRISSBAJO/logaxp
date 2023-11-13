import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGlobe, faPhone, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import logo2 from '../assets/images/nlogo.png';
import './Header.css'

const Header = ({ onJoinClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHero, setShowHero] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState('');

    const handleMouseEnter = (section) => {
        setDropdownOpen(section);
      };
      
      const handleMouseLeave = () => {
        setDropdownOpen('');
      };
    
    
  
    useEffect(() => {
        const handleScroll = () => {
          // Check if user has scrolled more than 200 pixels
          setIsSticky(window.scrollY > 200);
          // More complex logic to determine if the hero should be shown can be added here
          setShowHero(window.scrollY < 50); // Adjust as needed
        };
    
        // Add event listener on mount
        window.addEventListener('scroll', handleScroll);
    
        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);;
  return (
    <header className={`${isSticky ? 'sticky-header' : ''} bg-gray-900 text-white `}>
      {/* Top Header */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
          <img src={logo2} alt="LogaXP Logo" className="h-12 mr-6" />
          {/* Logo */}
          </Link>
          {/* Hamburger Menu Icon - Visible on Mobile */}
          <button
            className="text-gray-500 inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full gap-20 md:w-auto bg-gray-900 md:bg-transparent flex-col md:flex-row p-6 md:p-0 transition duration-300 ease-in-out items-center space-y-6 md:space-y-0 md:space-x-6 z-20`}>

            {/* Services Dropdown */}
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
                <Link to="/" className="nav-link text-white hover:text-green-500 block md:inline-block transition duration-300">Services</Link>
                <Dropdown isOpen={dropdownOpen === 'services'} section="services" onMouseLeave={handleMouseLeave} />
            </div>

            {/* Industries Dropdown */}
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('industries')} onMouseLeave={handleMouseLeave}>
                <Link to="/" className="nav-link text-white hover:text-green-500 transition duration-300">Industries</Link>
                <Dropdown isOpen={dropdownOpen === 'industries'} section="industries" onMouseLeave={handleMouseLeave} />
            </div>

            {/* Insights Dropdown */}
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('insights')} onMouseLeave={handleMouseLeave}>
                <Link to="/" className="nav-link text-white hover:text-green-500 block md:inline-block transition duration-300">Insights</Link>
                <Dropdown isOpen={dropdownOpen === 'insights'} section="insights" onMouseLeave={handleMouseLeave} />
            </div>

            {/* Careers Dropdown */}
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('careers')} onMouseLeave={handleMouseLeave}>
                <Link to="/" className="nav-link text-white hover:text-green-500 block md:inline-block transition duration-300">Careers</Link>
                <Dropdown isOpen={dropdownOpen === 'careers'} section="careers" onMouseLeave={handleMouseLeave} />
            </div>
        </nav>

        {/* Search and Icons */}
        <div className={`flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block `}>
          {/* Search Bar */}
          <div className="flex items-center mb-1 bg-white rounded overflow-hidden p-1">
            <input
              type="text"
              className="px-2 text-gray-700 leading-tight focus:outline-none"
              id="search"
              placeholder="Search"
            />
            <button className="flex items-center justify-center px-4 border-l">
              <FontAwesomeIcon icon={faSearch} className="text-gray-700" />
            </button>
          </div>
          {/* Contact Icons */}
          <Link to="/contact" className="text-gray-300 hover:text-green-500">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            Contact Us
          </Link>
          <a href="tel:+1-888-555-5555" className="text-gray-300 hover:text-green-500">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +1-888-555-5555
          </a>
          {/* User Icon */}
          <Link to="/login" className="text-gray-300 hover:text-green-500">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Login
          </Link>
        </div>
      </div>
        <hr className="text-green-500 border-2"/>
      {/* Hero Section */}
      <div className={`hero-section transition-all duration-500 ease-in-out bg-custom-dark ${!showHero ? 'collapsed' : ''}`}>
      <div className="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
        <div className="md:flex-1 md:pr-8">
          <h1 className="text-4xl font-bold  ml-24">
            <span className="text-green-500 loga">LogaXP</span><br/> Innovating IT solutions.
          </h1>
          <div className="mb-4 max-w-md">
            <p className="text-gray-400">
                LogaXP is a leading provider of innovative IT solutions, offering comprehensive human resource solutions and service utilities. Our applications are designed to streamline complex business processes and drive organizational growth.
            </p>
            </div>
        </div>
        {/* Hero Image */}
        <div className="hidden md:block">
          {/* <img src={logo} alt="LogaXP Logo" className="h-60" /> */}
        </div>
      </div>
      <nav className="bg-white  shadow-xl">
    <button onClick={onJoinClick} className="font-bold hover:text-purple-500 hover:bg-gray-200 text-custom-dark block md:inline-block py-1 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline" aria-label="Sign up for LogaXP">
        Get Started with LogaXP
    </button>
    </nav>
        </div>
    </header>
  );
};

export default Header;
