import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import AllRecommendations from '../component/AllRecommendations/AllRecommendations';

const QueriesDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [craft, setCraft] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Set loading to true when starting to fetch data
    fetch(`http://localhost:5000/QueriesDetails/${id}`)
      .then(res => res.json())
      .then(data => {
        setCraft(data);
        // Set loading to false when data is fetched
        console.log(data);
      });
  }, [id]);
  const {
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
  } = craft;

  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    fetch(`http://localhost:5000/subcategory/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        console.log(data);
      });
  }, [id]);

  const handleAddRecommendation = event => {
    event.preventDefault();
    const form = event.target;
    const RecommendationTitle = form.RecommendationTitle.value;
    const RecommendedproductName = form.RecommendedproductName.value;
    const RecommendedProductImage = form.RecommendedProductImage.value;
    const Recommendationreason = form.Recommendationreason.value;
    const queryTitle = QueryTItle;
    const productName = ProductName;
    const currentDateAndTime = new Date().toLocaleString();
    const newRecommended = {
      RecommendationTitle,
      RecommendedproductName,
      RecommendedProductImage,
      Recommendationreason,
      queryTitle,
      productName,
      id,
      email,
      Name,
      User: {
        email: user?.email,
        Name: user?.displayName,
        photo: user?.photoURL,
      },
      currentDateAndTime,
    };
    console.log(newRecommended);
    // send data to the server
    fetch('http://localhost:5000/recommended', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newRecommended),
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
          setItem(prevItems => [...prevItems, newRecommended]);
          setCraft(prevCraft => ({
            ...prevCraft,
            recommendationCount: prevCraft.recommendationCount + 1,
          }));
        }
      });
    form.reset();
  };
  return (
    <>
      <div>
        <div className="hero-content flex-col lg:flex lg:flex-row">
          <div className="text-center lg:text-left">
            <div className="card lg:h-[500px] lg:card-side bg-base-100 shadow-xl">
              <figure className="">
                <img src={ProductImage} alt="Album" />
              </figure>
              <div className="card-body text-start">
                <h2 className="card-title">{QueryTItle}</h2>
                <p>{ProductName}</p>
                <p>{ProductBrand}</p>
                <p>{BoycottingReasonDetails}</p>
                <p>{currentDateAndTime}</p>
                <p className="font-bold text-primary text-lg">
                  {recommendationCount}
                </p>
                <div className="flex items-center gap-5">
                  <div className="avatar  gap-5 items-center ">
                    <div className="w-16 rounded-full ">
                      <img src={userimage} />
                    </div>
                  </div>
                  <div className="">
                    <h2>{Name}</h2>
                    <h2>{email}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] shrink-0 max-w-sm lg:max-w-2xl shadow-2xl bg-base-100">
            <div className="text-center text-xl mt-3 font-bold">
              Add Recommendation
            </div>
            <form onSubmit={handleAddRecommendation} className="card-body">
              <div className="lg:flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recommendation Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Recommendation Title"
                    className="input input-bordered"
                    name="RecommendationTitle"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recommended productName</span>
                  </label>
                  <input
                    type="text"
                    placeholder="RecommendedproductName"
                    className="input input-bordered"
                    name="RecommendedproductName"
                    required
                  />
                </div>
              </div>
              <div className="lg:flex gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recommended ProductImage</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Recommended ProductImage"
                    className="input input-bordered"
                    name="RecommendedProductImage"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recommendation reason</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Recommendation reason"
                    className="input input-bordered"
                    name="Recommendationreason"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Recommendation</button>
              </div>
            </form>
          </div>
        </div>
        <div className="">
          {item.map(recommended => (
            <AllRecommendations
              key={recommended.id}
              recommended={recommended}
            ></AllRecommendations>
          ))}
        </div>
      </div>
    </>
  );
};

export default QueriesDetails;
