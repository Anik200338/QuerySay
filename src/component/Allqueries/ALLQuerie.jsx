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
    userimage,
    Name,
    email,
  } = Querie;
  return (
    <div className="card card-compact rounded-none border-2 border-info  h-[550px] bg-base-100 shadow-2xl">
      <figure className="h-20">
        <img src={ProductImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{QueryTItle}</h2>
        <h1 className="text-lg font-semibold">
          <span className="font-bold">ProductName:</span> {ProductName}
        </h1>
        <h1 className="text-xl font-se ">
          <span className="font-bold">BrandName:</span>
          {ProductBrand}
        </h1>
        <h1 className="text-sm  ">{BoycottingReasonDetails}</h1>
        <h1 className="text-lg  ">
          <span className="font-bold">Date&Time:</span>
          {currentDateAndTime}
        </h1>
        <div className="flex items-center gap-5">
          <div className="avatar  gap-5 items-center ">
            <div className="w-10 rounded-full ">
              <img src={userimage} />
            </div>
          </div>
          <div className="">
            <h2 className="font-bold">{Name}</h2>
            <h2>{email}</h2>
          </div>
        </div>
        <div className="card-actions justify-between">
          <Link to={`/craft/${_id}`}>
            <button className="btn btn-accent">Recommend</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ALLQuerie;
