import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const [craft, setCraft] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/UpdateDetails/${id}`)
      .then(res => res.json())
      .then(data => {
        setCraft(data);
        console.log(data);
      });
  }, [id]);
  // ?dsad
  const handleUpdate = () => {
    event.preventDefault();
    const form = event.target;
    const ProductName = form.ProductName.value;
    const ProductBrand = form.ProductBrand.value;
    const ProductImage = form.ProductImage.value;
    const QueryTItle = form.QueryTItle.value;
    const BoycottingReasonDetails = form.BoycottingReasonDetails.value;
    const UpdateCraft = {
      ProductName,
      ProductBrand,
      ProductImage,
      QueryTItle,
      BoycottingReasonDetails,
    };
    fetch(`http://localhost:5000/update/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(UpdateCraft),
    })
      .then(res => res.json())
      .then(data => {
        setCraft(data);
        // Set loading to false when data is fetched
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Updated Successfully',
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
      <form onSubmit={handleUpdate}>
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
                defaultValue={craft.ProductName}
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
                defaultValue={craft.ProductBrand}
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
                defaultValue={craft.ProductImage}
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
                defaultValue={craft.QueryTItle}
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
                defaultValue={craft.BoycottingReasonDetails}
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Query" className="btn btn-block" />
      </form>
    </div>
  );
};

export default Update;
