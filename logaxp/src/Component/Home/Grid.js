import React from 'react';
import Card from './Main';
import Trending from './Trending';

const Grid = ({ cards, trendingItems }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-2">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <Trending items={trendingItems} />
      </div>
    </div>
  );
};

export default Grid;
