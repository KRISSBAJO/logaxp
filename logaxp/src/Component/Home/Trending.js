import React from 'react';

const Trending = ({ items }) => {
  return (
    <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4">Trending</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 text-base mb-2">
            <a href={item.link} className="hover:text-indigo-600 transition-colors duration-300">{`${index + 1}. ${item.title}`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
