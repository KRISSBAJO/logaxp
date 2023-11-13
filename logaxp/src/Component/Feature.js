import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/book.png';
import image2 from '../assets/images/sys.png';
import image3 from '../assets/images/task3.png';

const Feature = () => {
  return (
    <div className="py-12 bg-gray-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center uppercase mb-12">Featured Products</h1>
        <div className="flex flex-wrap -mx-4">
          {[
            {
              title: 'Appointment Booking',
              image: image1,
              text: 'Welcome to our convenient and user-friendly appointment booking web application! Join our growing community of service providers and users, where you can easily connect and find the services you need, right in your neighborhood. Discover, book, and experience the convenience of local services with us..',
            },
            {
              title: 'LogaSys Consulting',
              image: image2,
              text: 'Welcome to LogaSys, your gateway to top-tier IT expertise. At LogaXP, we pride ourselves on our team of skilled IT engineers, software developers, and DevOps professionals who are ready to propel your business to the next level. Explore our website to discover the depth of our technical prowess and how we can tailor our services to meet your unique needs. Let us help you achieve your business goals today!',
            },
            {
              title: 'Task Management',
              image: image3,
              text: 'Welcome to our comprehensive task management web application! Empower your company by streamlining project organization and team collaboration. Register your company, create employee profiles, and take control of your projects. Effortlessly create, assign, and track tasks, sprints, and projects, ensuring seamless progress tracking and efficient teamwork.',
            },
          ].map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-xl rounded-lg flex flex-col overflow-hidden h-full">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover"
                  src={feature.image}
                  alt={feature.title}
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg text-gray-900 font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-4">{feature.text}</p>
                  </div>
                  <Link
  to="/"
  className="mt-4 self-start inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-900 transition-colors duration-300 ease-in-out"
>
  <i className="fas fa-external-link-alt mr-2"></i> Visit Site
</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
