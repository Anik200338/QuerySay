import React from 'react';
import { Link } from 'react-router-dom';

const MyRecommendedCard = ({ Queries, handleDelete }) => {
  const {
    ProductName,
    _id,
    id,
    currentDateAndTime,
    ProductBrand,

    ProductImage,

    QueryTItle,
    BoycottingReasonDetails,
  } = Queries;
  return (
    <div className="card card-compact  h-96 bg-base-100 shadow-2xl">
      <figure>
        <img src={ProductImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{id}</h2>
        <h1 className="text-lg font-semibold">{ProductName}</h1>
        <h1 className="text-xl font-bold text-gray-400">{ProductBrand}</h1>
        <div className="card-actions justify-between">
          <button className="btn bg-info">Customization : {}</button>
          <button className="btn bg-info">{currentDateAndTime}</button>
        </div>
        <div className="card-actions justify-between">
          <Link to={`/Update/${_id}`}>
            <button className="btn btn-warning">Update</button>
          </Link>
          <button
            onClick={() => handleDelete(_id, id)}
            className="btn btn-error"
          >
            Delete
          </button>
          <Link to={`/craft/${_id}`}>
            <button className="btn btn-accent">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyRecommendedCard;
