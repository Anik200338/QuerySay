import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AddQueries = () => {
  const { user } = useContext(AuthContext);
  const handleAddQuery = event => {
    event.preventDefault();
    const form = event.target;
    const ProductName = form.ProductName.value;
    const ProductBrand = form.ProductBrand.value;
    const ProductImage = form.ProductImage.value;
    const QueryTItle = form.QueryTItle.value;
    const BoycottingReasonDetails = form.BoycottingReasonDetails.value;
    const email = user.email;
    const Name = user.displayName;
    const userimage = user.photoURL;
    const currentDateAndTime = new Date().toLocaleString();
    const recommendationCount = 0;

    const newQuery = {
      ProductName,
      ProductBrand,
      ProductImage,
      QueryTItle,
      BoycottingReasonDetails,
      email,
      Name,
      userimage,
      currentDateAndTime,
      recommendationCount,
    };
    console.log(newQuery);
    // send data to the server
    fetch('http://localhost:5000/AddQuery', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newQuery),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
    form.reset();
  };
  return (
    <div className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] rounded-2xl p-5 lg:p-20 lg:m-20">
      <h2 className="text-3xl font-extrabold text-center mb-5">Add Query</h2>
      <form onSubmit={handleAddQuery}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold"> ProductName </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ProductName"
                placeholder="ProductName"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 lg:lg:ml-4">
            <label className="label">
              <span className="label-text font-bold"> ProductBrand</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ProductBrand"
                placeholder="ProductBrand"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">ProductImage-URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ProductImage"
                placeholder="ProductImage-URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text font-bold">Query TItle</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="QueryTItle"
                placeholder="Query TItle"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text font-bold">
                Boycotting Reason Details
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="BoycottingReasonDetails"
                placeholder="Boycotting Reason Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Query" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddQueries;
