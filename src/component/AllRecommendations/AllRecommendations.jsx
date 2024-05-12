import React from 'react';

const AllRecommendations = ({ recommended }) => {
  const { RecommendationTitle, RecommendedproductName } = recommended;
  return (
    <div>
      <h2>{RecommendationTitle}</h2>
      <h2>{RecommendedproductName}</h2>
    </div>
  );
};

export default AllRecommendations;
