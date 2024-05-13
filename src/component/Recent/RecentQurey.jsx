import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecentCard from '../RecentCard';

const RecentQurey = () => {
  const { Recent } = useLoaderData();
  const LatestCard = Recent.slice(0, 6);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 lg:p-20"
      data-aos="fade-down-right"
    >
      {LatestCard.map(Craft => (
        <RecentCard key={Craft.id} Craft={Craft} />
      ))}
    </div>
  );
};

export default RecentQurey;
