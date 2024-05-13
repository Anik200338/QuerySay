import React from 'react';

const AllRecommendations = ({ recommended }) => {
  const {
    RecommendationTitle,
    RecommendedproductName,
    RecommendedProductImage,
    Recommendationreason,
    currentDateAndTime,
    User,
  } = recommended;

  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={User.photo} />
          </div>
        </div>
        <div className="chat-bubble  chat-bubble-primary">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={RecommendedProductImage}
              className="w-auto lg:w-64 rounded-lg "
            />
            <div>
              <h1 className="text-xl font-bold">{User.Name}</h1>
              <p className="">{User.email}</p>
              <p className="">{currentDateAndTime}</p>
              <h1 className="text-lg font-bold pt-2">{RecommendationTitle}</h1>
              <h1 className="text-lg font-bold">
                Product Name: {RecommendedproductName}
              </h1>
              <p className="">{Recommendationreason}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecommendations;
