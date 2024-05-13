import React from 'react';

import Slider from '../component/slider/slider';
import Banner from '../component/Banner/Banner';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="w-full mt-20">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
