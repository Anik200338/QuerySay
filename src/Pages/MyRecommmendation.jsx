import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import MyRecommendedCard from '../component/MyRecommendedCard/MyRecommendedCard';
import { Helmet } from 'react-helmet-async';

const MyRecommmendation = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const [control, setcontrol] = useState(false);

  useEffect(() => {
    if (user?.email)
      fetch(
        `https://assignment-11-server-pink-eight.vercel.app/myRecommended/${user?.email}`,
        {
          credentials: 'include',
        }
      )
        .then(res => res.json())
        .then(data => {
          data;
          setItems(data);
        });
  }, [user, control]);

  const handleDelete = (id, id2) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-pink-eight.vercel.app/myDelete?id=${id}&id2=${id2}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your card has been deleted.', 'success');
              setcontrol(!control);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto mb-10">
      <Helmet>
        <title>QuerySay | My recomm..</title>
      </Helmet>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Recommendation Title</th>
            <th>Recommendedproduct Name</th>
            <th>Date&Time</th>
            <th>Query Owner Name</th>
            <th>Delete Recommendation</th>
          </tr>
        </thead>
        {items.map((Queries, index) => (
          <MyRecommendedCard
            key={Queries.id}
            Queries={Queries}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </table>
    </div>
  );
};

export default MyRecommmendation;
