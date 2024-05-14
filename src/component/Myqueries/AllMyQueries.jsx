import React from 'react';
import { Link } from 'react-router-dom';

const AllMyQueries = ({ Queries, handleDelete }) => {
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
  } = Queries;
  return (
    <div className="card card-compact rounded-none border-2 border-info  h-[450px] bg-base-100 shadow-2xl">
      <figure className="h-40">
        <img src={ProductImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{QueryTItle}</h2>
        <h1 className="text-lg font-semibold">
          <span className="font-bold">ProductName:</span> {ProductName}
        </h1>
        <h1 className="text-lg font-se ">
          <span className="font-bold">Date&Time:</span>
          {currentDateAndTime}
        </h1>
        <div className="absolute bottom-1">
          <div className="flex items-center gap-5 mb-3">
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
            <Link to={`/Update/${_id}`}>
              <button className="btn btn-warning">Update</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              Delete
            </button>
            <Link to={`/craft/${_id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMyQueries;
