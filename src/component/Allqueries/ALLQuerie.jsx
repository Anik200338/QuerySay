import React from 'react';
import { Link } from 'react-router-dom';

const ALLQuerie = ({ Querie }) => {
  const {
    ProductName,
    _id,
    currentDateAndTime,
    ProductBrand,

    ProductImage,

    QueryTItle,
    BoycottingReasonDetails,
  } = Querie;
  return (
    <div className="card card-compact  h-96 bg-base-100 shadow-2xl">
      <figure>
        <img src={ProductImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{QueryTItle}</h2>
        <h1 className="text-lg font-semibold">{ProductName}</h1>
        <h1 className="text-xl font-bold text-gray-400">{ProductBrand}</h1>
        <div className="card-actions justify-between">
          <button className="btn bg-info">Customization : {}</button>
          <button className="btn bg-info">{currentDateAndTime}</button>
        </div>
        <div className="card-actions justify-between">
          <Link to={`/craft/${_id}`}>
            <button className="btn btn-accent">recommend Butt on</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ALLQuerie;
