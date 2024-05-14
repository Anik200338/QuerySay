import React from 'react';
import { Link } from 'react-router-dom';

const RecentCard = ({ Craft }) => {
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
  } = Craft;
  return (
    <div className="card card-compact rounded-none border-2 border-info  h-[500px] bg-base-100 shadow-2xl ">
      <figure className="h-24">
        <img src={ProductImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{QueryTItle}</h2>
        <h1 className=" font-semibold">
          <span className="font-bold">ProductName:</span> {ProductName}
        </h1>
        <h1 className=" font-se ">
          <span className="font-bold">BrandName:</span>
          {ProductBrand}
        </h1>
        <h1 className="text-sm ">{BoycottingReasonDetails}</h1>
        <h1 className="text-lg font-se ">
          <span className="font-bold">Date&Time:</span>
          {currentDateAndTime}
        </h1>
        <div className="flex items-center gap-5  mt-5 absolute bottom-3 ">
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
      </div>
    </div>
  );
};

export default RecentCard;
