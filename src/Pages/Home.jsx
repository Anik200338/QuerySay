import React from 'react';

import Slider from '../component/slider/slider';
import Banner from '../component/Banner/Banner';
import Section from '../component/Section';
import RecentQurey from '../component/Recent/RecentQurey';
import Members from '../component/Members';
import Coustomers from '../component/Coustomers';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>QuerySay | Home</title>
      </Helmet>
      <Slider></Slider>
      <div className="w-full mt-20">
        <Banner></Banner>
        <Section></Section>
        <RecentQurey></RecentQurey>
        <Coustomers></Coustomers>
        <Members></Members>
      </div>
    </div>
  );
};

export default Home;
