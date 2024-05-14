import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import ForMeCard from '../component/ForMeReco/ForMeCard';

const ForME = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const [control, setcontrol] = useState(false);

  useEffect(() => {
    if (user?.email)
      fetch(
        `https://assignment-11-server-pink-eight.vercel.app/Forme/${user?.email}`,
        {
          credentials: 'include',
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setItems(data);
        });
  }, [user, control]);

  const handleDelete = id => {
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
          `https://assignment-11-server-pink-eight.vercel.app/delete/${id}`,
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
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Recommendation Title</th>
            <th>Recommendedproduct Name</th>
            <th>Date&Time</th>
            <th>Recommendation Owner Name</th>
            <th>Details </th>
          </tr>
        </thead>
        {items.map((Queries, index) => (
          <ForMeCard
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

export default ForME;
