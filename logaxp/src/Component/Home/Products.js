
import React from 'react';
import './Products.css'
import logo from "../../assets/images/nlogo.png";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white animate-fadeIn card-container mb-40">
      {/* Header */}
<div className="text-center p-6 animate-scaleUp">
  <h1 className="text-4xl font-bold mb-2 text-green-900">
    Pioneering Digital Excellence with LogaXP
  </h1>
  <p className="text-lg">
    Redefining your technological horizon with bespoke applications crafted for peak business performance.
  </p>
</div>

      {/* Product Cards Grid Structure */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-popIn card-hover-effect">
      <div className="flex flex-col bg-blue-100 p-4 rounded-lg shadow transition-shadow duration-300 ease-in-out card-equal-height hover:shadow-lg hover:bg-red-200 hover:text-white">
    <div className="flex flex-col md:flex-row items-center mb-4">
        <h3 className="text-3xl font-semibold  flex-grow">Appointment Booking</h3>
        <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
    </div>
    <p className="mb-4 text-center text-base leading-relaxed px-2">
        Welcome to our convenient and user-friendly appointment booking web application! Join our growing community of service providers and users, where you can easily connect and find the services you need, right in your neighborhood. Discover, book, and experience the convenience of local services with us.
    </p>
            <button className="mt-4 bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out mx-auto">
                <a href="https://www.logaxp.com/" target="_blank" rel="noreferrer">
                    Visit Site
                </a>
            </button>
        </div>


        {/* Task Manager App Card */}
        <div className="flex flex-col bg-green-100 p-4 rounded-lg shadow-md card-equal-height hover-effect hover:bg-red-200 hover:text-white hover:font-bold">
          <div className="flex flex-col md:flex-row items-center mb-4">
        <h3 className="text-3xl font-semibold  flex-grow"> Task Manager</h3>
        <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
    </div>
          <p className="mb-4 flex-grow max-w-xs mx-auto text-center text-base leading-relaxed">
          Empower your team with our 'Task Manager App'. Assign, track, and manage tasks with a few clicks, fostering productivity and clarity in every project.
          </p>
          <button className="mt-4 bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out mx-auto">
            <a href="https://www.logaxp.com/" target="_blank" rel="noreferrer">
                Visit Site
            </a>
        </button>
            {/* ... Other content */}
        </div>

        {/* DocCenter Interface Card */}
        <div className="flex flex-col bg-yellow-100 p-4 rounded-lg shadow-md card-equal-height hover-effect hover:bg-red-200 hover:text-white hover:font-bold ">
        <div className="flex flex-col md:flex-row items-center mb-4">
        <h3 className="text-3xl font-semibold  flex-grow">DocCenter</h3>
        <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
    </div>
          <p className="mb-4 flex-grow">
            Safeguard your documents in the cloud with ease. Access, organize, and store with confidence, knowing your data is secure and at your fingertips.
          </p>
          <button className="mt-4 bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out mx-auto">
                <a href="https://www.logaxp.com/" target="_blank" rel="noreferrer">
                    Visit Site
                </a>
            </button>
          {/* ... Other content */}
        </div>
        {/* Loga Sys */}
        <div className="flex flex-col bg-gray-1 p-4 rounded-lg shadow-md card-equal-height hover-effect hover:bg-red-200 hover:text-white hover:font-bold ">
        <div className="flex flex-col md:flex-row items-center mb-4">
        <h3 className="text-3xl font-semibold  flex-grow">LogaSys</h3>
        <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
    </div>
          <p className="mb-4 flex-grow">
            Your gateway to top-tier IT expertise.we don't just build applications; we craft experiences that enhance efficiency, drive productivity, and revolutionize your operational dynamics
          </p>
          <button className="mt-4 bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out mx-auto">
            <a href="https://www.logaxp.com/" target="_blank" rel="noreferrer">
                Visit Site
            </a>
        </button>
          {/* ... Other content */}
        </div>

        {/* OnBoard Application Card */}
        <div className="flex flex-col bg-red-100 p-4 rounded-lg shadow-md card-equal-height hover-effect hover:bg-red-200 hover:text-white hover:font-bold ">
        <div className="flex flex-col md:flex-row items-center mb-4">
        <h3 className="text-3xl font-semibold  flex-grow">OnBoard</h3>
        <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
    </div>
        
          <p className="mb-4 flex-grow">
            Streamline the employee induction process efficiently.Welcome new talent to your organization through an engaging platform designed to integrate seamlessly with your HR systems
          </p>
          <button className="mt-4 bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out mx-auto">
            <a href="https://www.logaxp.com/" target="_blank" rel="noreferrer">
                Visit Site
            </a>
        </button>
          {/* ... Other content */}
        </div>

        {/* Time & Attendance System Card */}
        <div className="flex flex-col bg-purple-100 p-4 rounded-lg shadow-md card-equal-height hover-effect hover:bg-red-200 hover:text-white hover:font-bold ">
          <div className="flex flex-col md:flex-row items-center mb-4">
        <h3 className="text-3xl font-semibold  flex-grow">Time & Attendance</h3>
        <img src={logo} alt="Logo" className="h-10 w-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" />
    </div>
          <p className="mb-4 flex-grow">
            Simplify payroll complexities with accurate tracking and reporting.'Time & Attendance' system simplifies payroll complexities, providing accurate tracking and reporting to ensure every minute is accounted for. Manage your workforce with confidence, knowing your data is secure and accessible.
          </p>
          <button className="mt-4 bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out mx-auto">
            <a href="https://www.logaxp.com/" target="_blank" rel="noreferrer">
                Visit Site
            </a>
        </button>
          {/* ... Other content */}
        </div>
      </div>
    </div>
  );
}

export default Products;


